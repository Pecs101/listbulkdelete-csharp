# ListBulkDelete
Simple c# implementation of bulk delete items in a list.

### Compatible with
.NET Core 3.1 and above

### Imports:
  * js:
    ``` 
    <script src="~/bulkaction/bulkaction.js" asp-append-version="true"></script> 
    ```
  * css: 
    ``` 
    <link rel="stylesheet" href="~/bulkaction/bulkbtn.css" asp-append-version="true" /> 
    ```
    
### Code:   
- DeletAll: 
set the following code above the list, and pass in the controller and action name inside the delectbulkaction() function: 
    ``` 
    <div> 
        <button type="button" class="btn btn-danger " id="deletebulk" onclick="builk_delete_confirm_show('show')"> Delete</button>

        <div id="builk_delete_confirm" class="alert alert-warning alert-dismissible fade show " role="alert" style="display:none">
            <i class="fa fa-warning"></i>

            <span id="builk_delete_confirm_warning_text">
                <strong>Attention!</strong> The data will be deleted permanently, Are you sure?
                <button type="button" class="btn btn-primary btn-sm" onclick="delectbulkaction('YourControllerName', 'DeleteBulk')">Yes!</button>
                <button type="button" class="btn btn-secondary btn-sm" onclick="builk_delete_confirm_show('hide')">No!</button>
            </span>
            <span id="builk_delete_confirm_wait" style="display:none">
                <strong>Wait!</strong>  just a moment...
            </span>

            <button type="button" class="btn-close" onclick="builk_delete_confirm_show('hide')" aria-label="Close"></button>
        </div>
    </div>
    ```
- Them set the checkbox in table header:
    ``` 
    <th>
        <input type="checkbox" id="selectAll">
    </th> 
    ```
     
- to set the delete list item set the following code inside the list content, and pass the Id as a value of the imput:
    ```
    <td> 
        <input type="checkbox" id="chk" class="classchk" value="@item.Id"> 
    </td>
    ```  
 
- in your controller method place this code, and do what ever task you need:
   ```
     public async Task<ActionResult> DeleteBulk(string[] data)
        { 
            data.ToList().ForEach(id =>
            {
                /// Do the task ...
            });

            return View("Index", _persons);
        }
   ```

# Demo
<img width="1008" alt="Bulkdelete" src="https://user-images.githubusercontent.com/2583043/193836547-6055823d-51b7-4150-8520-85f0b5b0c033.PNG">

     
Goog Coding :)
