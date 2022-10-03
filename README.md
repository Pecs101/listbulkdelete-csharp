# ListBulkDelete
Simple c# implementation of list bulk delete


### Imports:
  * js:
    ```<script src="~/bulkaction/bulkaction.js" asp-append-version="true"></script>```
  * css: 
    ```<link rel="stylesheet" href="~/bulkaction/bulkbtn.css" asp-append-version="true" />```
    
    
- to set the deletAll set the folloing code abouve the list, and pass in the controller and action name inside the delectbulkaction() function: 
     ```<button type="button" class="btn btn-danger " id="deletebulk" onclick="delectbulkaction('Home', 'DeleteBulk')"> Delete</button>```
     
- to set the delete list item set the following code inside the list content, and pass the Id as a value of the imput:
      ```<td>
          <input type="checkbox" id="chk" class="classchk" value="@item.Id">
      </td>```
     
     
Goog Coding :)
