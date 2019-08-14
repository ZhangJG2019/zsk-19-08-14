 $(function () {
   $('.setPageDiv').change(function () {
     getMsg(parseInt($(this).val()))
   })

   function getMsg(num, url) {
     $.ajax({
       //  url: 'data/bussiness.json',
       //url: './data/bussiness.json',
       url: 'url',
       type: 'GET',
       dataType: 'json',
       success: function (data) {
         //1.计算分页数量
         var showNum = 10; //每页显示条数
         //  var dataL = data.list.length;
         var pageNum = Math.ceil(data / showNum);
         $('.Pagination').pagination(pageNum, {
           num_edge_entries: 1, //边缘页数
           num_display_entries: 4, //主体页数
           items_per_page: 1, //每页显示1项
           prev_text: "上一页",
           next_text: "下一页",
           callback: function (index) {
             //console.log(index);
             var html = '<ul>'

             console.log(showNum * index + '~' + parseInt(showNum * index) + parseInt(showNum))
             for (var i = showNum * index; i < showNum * index + showNum; i++) {
               //console.log(i)
               if (i < dataL) {

                 var img = data.list[i].img;
                 var manager = data.list[i].manager; //交易类型
                 html += "<div class='row'>";
                 html += "<div class='col-md-1   col-xs-1'>"
                 html += "<img src='" + img + "'/   class='img-responsive'>"
                 html += "</div>"
                 html += "<div class='col-md-3   col-xs-3'>"
                 html += "<p>" + manager + "</p>"
                 html += "</div></div>";

               }
             }
             html += '</ul>';
             $('.list').html(html)
           }
         })

       }
     })
   }
   getMsg(6)

 })