const express = require('express');
const router = express.Router();
const data = require('./data.json')
var mongoose = require("mongoose");


var paper_list = ["DailyMailUK","FT","Guardian","Telegraph","TheSun"];

let paper_dict = {DailyMailUK:["FT","Guardian","Telegraph","TheSun"],
                  FT:["DailyMailUK","Guardian","Telegraph","TheSun"],
                  Guardian:["DailyMailUK","FT","Telegraph","TheSun"],
                  Telegraph:["DailyMailUK","FT","Guardian","TheSun"],
                  TheSun:["DailyMailUK","FT","Guardian","Telegraph"]};


function get_random_number(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

function get_random_papers(){
    var first_paper = paper_list[get_random_number(0,5)];
    var second_paper = paper_dict[first_paper][get_random_number(0,4)];
    return [first_paper,second_paper];
}



const db = mongoose.connection;
const tweetSchema = new mongoose.Schema({paper:String,term:String,text:String,link:String});
const Tweets = mongoose.model('tweets',tweetSchema,'test_collection');

async function get_both_random(topic,res){
    var p = await get_random_papers();
    Promise.all([
        Tweets.aggregate([{$match:{"paper":p[0],"term":topic}},{$sample:{size:1}}]).exec(),
        Tweets.aggregate([{$match:{"paper":p[1],"term":topic}},{$sample:{size:1}}]).exec()
    ]).then(function(result) {
      res.send([].concat.apply([],result));
  })

}

const paperSchema = new mongoose.Schema({paper:String,correct_answers:Number, incorrect_answers:Number});
const paperModel = mongoose.model('paper',paperSchema,"paper_answer_collection")

async function update_newspaper_correct(paper) {
	var doc = await paperModel.findOne({paper:paper}).exec();
	doc.correct_answers=doc.correct_answers+1;
	await doc.save();

}

async function update_newspaper_wrong(paper){
	var doc = await paperModel.findOne({paper:paper}).exec();
	doc.incorrect_answers=doc.incorrect_answers+1;
	await doc.save();
}

async function get_newspaper_info(paper1,paper2,res){
    var paper_info1 = await paperModel.findOne({paper:paper1}).exec();
    var paper_info2 = await paperModel.findOne({paper:paper2}).exec();
    var paper_list = [paper_info1,paper_info2];
    res.send(paper_list);
}


/* GET api listing. */
router.get('/politics', (req, res) => {
  res.header("Content-Type",'application/json');

  get_both_random("Politics",res);
});


router.get('/brexit', (req, res) => {
  res.header("Content-Type",'application/json');
  get_both_random("Brexit",res);
});



router.get('/america', (req, res) => {
  res.header("Content-Type",'application/json');
  get_both_random("America",res);
});


router.get('/boris', (req, res) => {
  res.header("Content-Type",'application/json');
  get_both_random("Boris",res);
});

router.get('/climate', (req, res) => {
  res.header("Content-Type",'application/json');
  get_both_random("Climate",res);
});


router.get('/covid', (req, res) => {
  res.header("Content-Type",'application/json');
  get_both_random("Covid",res);
});

router.get('/military', (req, res) => {
  res.header("Content-Type",'application/json');
  get_both_random("Military",res);
});


router.get('/racism', (req, res) => {
  res.header("Content-Type",'application/json');
  get_both_random("Racism",res);
});

router.get('/correct', (req, res) => {
  update_newspaper_correct(req.query.paper);
});

router.get('/incorrect', (req, res) => {
  update_newspaper_wrong(req.query.paper);
});

router.get('/newssources',(req,res)=>{
    res.header("Content-Type",'application/json');
    get_newspaper_info(req.query.paper1,req.query.paper2,res);
})



module.exports = router;
