function addTweet()
{
var mod = 100;
var results = document.getElementById("addTweets").value;
results += mod;

document.getElementById("tweetsOutput").innerHTML = results;
}