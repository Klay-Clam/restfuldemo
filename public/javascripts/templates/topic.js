// home 界面的模板
define("topic", [], function () {

    var topics = {};
    var topicTemp = "<div class='topic'><div><h3 class='topic-title'></h3><div class='topic-msg'><label class='author'></label><label class='publishTime'></label></div></div>" +
        "<div class='topic-body'><div></div></div><div class='topic-tags'></div></div>";
    var tagTemp = "<span class='topic-tag'>tag</span>";
    var noTopic = "<span>空空如也</span>"
    topics.topicTemp = topicTemp;
    topics.tagTemp = tagTemp;
    topics.noTopic = noTopic;
    return topics;
})
