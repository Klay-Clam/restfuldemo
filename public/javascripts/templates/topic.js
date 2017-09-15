// home 界面的模板
define("topic", [], function () {

    var topics = {};
    var topicTemp = "<div class='topic'><div><h3 class='topic-title'></h3><div class='topic-msg'><label></label><label></label></div></div>" +
        "<div class='topic-body'><div></div></div><div class='topic-tags'></div></div>";
    var tagTemp = "<span class='topic-tag'>tag</span>";

    topics.topicTemp = topicTemp;
    topics.tagTemp = tagTemp;
    return topics;
})
