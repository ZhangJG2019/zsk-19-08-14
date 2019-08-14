 // 加载更多
 $(function () {
     /*初始化*/
     var counter = 0; /*计数器*/
     var pageStart = 0; /*offset*/
     var pageSize = 2; /*size*/
     /*首次加载*/
     getData(pageStart, pageSize);
     /*监听加载更多*/
     $(document).on('click', '.load_more', function () {
         counter++;
         pageStart = counter * pageSize;
         getData(pageStart, pageSize);
     });
 });

 function getData(offset, size) {
     jQuery.support.cors = true;
     var ApiUrl = "../";
     $.ajax({
         type: 'GET',
         url: ApiUrl + 'data/blog.json',
         dataType: 'json',
         success: function (reponse) {
             var data = reponse.list;
             var sum = reponse.list.length;
             var result = '';
             /****业务逻辑块：实现拼接html内容并append到页面*********/
             //console.log(offset , size, sum);
             /*如果剩下的记录数不够分页，就让分页数取剩下的记录数
              * 例如分页数是5，只剩2条，则只取2条
              * 实际MySQL查询时不写这个不会有问题
              */
             if (sum - offset < size) {
                 size = sum - offset;
             }

             /*使用for循环模拟SQL里的limit(offset,size)*/
             for (var i = offset; i < (offset + size); i++) {
                 result += '<div class="show-content" style="top: 0px;">' 
                                + '<div class="show-name">'+ data[i].name +'</div>' 
                                + '<div class="show-txt">' 
                                    + '<p class="">'+ data[i].content +'</p>' 
                                + '</div>' 
                                + '<div class="show-time">'+ data[i].time +'</div>' 
                                + '<div class="show-close">'+  data[i].close  +'</div>' 
                            + '</div>';
             }

             $('.load_more').append(result);

             /*******************************************/

             /*隐藏more按钮*/
             if ((offset + size) >= sum) {
                 $(".load_more").hide();
             } else {
                 $(".load_more").show();
             }
         },
         error: function (xhr, type) {
             alert('Ajax error!');
         }
     });
 }