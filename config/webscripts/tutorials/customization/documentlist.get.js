 // Find the default DocumentList widget and replace it with the custom widget
for (var i=0; i<model.widgets.length; i++)
{
  if (model.widgets[i].id == "DocumentList")
  {
    model.widgets[i].name = "Tutorials.custom.DocumentList";
  }
}
