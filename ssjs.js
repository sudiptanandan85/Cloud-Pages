<script runat="server">
  Platform.Load('Core', '1.1')

  // Global Variables
  // Change these variables according to your own settings
  var userDetails = {
           username : "sudiptanandan85",
           token    : "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",
           repoName : " Cloud-Pages,
           fileName : "test.js"
        }
  // Do not change anything below this section
  // get repo content
  function getPrivateRepoContent(obj){

      //Building the request URL = https://api.github.com/repos/marketingdeveloper/sfmc/contents/dev-1.html
      var resource = 'https://api.github.com/repos/'+ obj.username + '/' + obj.repoName + '/contents/' + obj.fileName

      var req = new Script.Util.HttpRequest(resource);
          req.emptyContentHandling = 0;
          req.retries = 2;
          req.continueOnError = true;
          req.contentType = "application/json; charset=utf-8"
          req.setHeader("Authorization","token " + obj.token);
          req.setHeader("User-Agent", obj.username + '/' + obj.repoName);
          //  This header is very important! It allows to get the file content raw version. With that we can treat the the file as content like a charm :)
          req.setHeader("Accept", "application/vnd.github.v3.raw");
          req.setHeader("Cache-Control", "");
          req.method = "GET";

      var resp = req.send();

      // Assigning the response content to a AMPScript variable
      Platform.Variable.SetValue("@runCode", resp.content)
  }

  //Run the function passing the user settings as parameter
  getPrivateRepoContent(userDetails)
</script>
