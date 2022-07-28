<script runat="server">
Platform.Load("core","1.1");  
try{
//Set Data Extension properties
var fields1 = [
      { "Name" : "SendID", "FieldType" : "Number"},
      { "Name" : "SubscriberKey", "FieldType" : "Text", "MaxLength" : 50 },
      { "Name" : "EventDate", "FieldType" : "Date", "Ordinal" : 2 },
      { "Name" : "EventType", "FieldType" : "Text", "MaxLength" : 50 },
      { "Name" : "TriggeredSendDefinitionObjectID", "FieldType" : "Text", "MaxLength" : 50 },
      { "Name" : "BatchID", "FieldType" : "Number"},
      { "Name" : "ClientID", "FieldType" : "Number"},
      { "Name" : "ListID", "FieldType" : "Number"}
    ]
  
var mytest1 = {
    "CustomerKey" : "mytest1",
    "Name" : "mytest1",
    "Fields" : fields1
 };
//Set Data Extension properties
var fields2 = [
      { "Name" : "SendID", "FieldType" : "Number"},
      { "Name" : "SubscriberKey", "FieldType" : "Text", "MaxLength" : 50 },
      { "Name" : "EventDate", "FieldType" : "Date", "Ordinal" : 2 },
      { "Name" : "EventType", "FieldType" : "Text", "MaxLength" : 50 },
      { "Name" : "TriggeredSendDefinitionObjectID", "FieldType" : "Text", "MaxLength" : 50 },
      { "Name" : "BatchID", "FieldType" : "Number"},
      { "Name" : "ClientID", "FieldType" : "Number"},
      { "Name" : "ListID", "FieldType" : "Number"}
    ]
  
var mytest2 = {
    "CustomerKey" : "mytest2",
    "Name" : "mytest2",
    "Fields" : fields2
 };
  
//Create Data Extensions   

var SentDE1 = DataExtension.Add(mytest1);
var SentDE2 = DataExtension.Add(mytest2);

Platform.Response.Write("<br>De " + numItems + " Created<br>")
}catch(e){
  Write(Stringify(e));
}
</script>
