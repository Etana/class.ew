$(function(){
  var p= location.pathname;
  if(x=p.match(/^\/t([1-9][0-9]*)(?:p([1-9][0-9]*))?-.*$/))
  {
    $('body').addClass('viewtopic id'+x[1]+' page'+(x[2]|0));
    $('.post').each(function(){
      var id= ($('.postprofile a[href^="/u"]:first',this).attr('href')||"0").replace(/^\/u([1-9][0-9]*).*$/,'$1');
      var group= ($('.postprofile dt > strong > a > span > strong',this).parent().attr('style')||"NONE").replace(/^color:#/,'')
      
      $(this).addClass('user'+id+' group'+group);
    });
  }
  else if(x=p.match(/^\/f([1-9][0-9]*)(?:p([1-9][0-9]*))?-.*$/))
  {
    $('body').addClass('viewforum id'+x[1]+' page'+(x[2]|0));
    $('.topiclist.bg_none.topics li').each(function(){
      var poster= ($('.dterm a[href^="/u"]').attr('href')||"0").replace(/^\/u([1-9][0-9]*).*$/,'$1');
      var postergroup= ($('.dterm .span-tab strong a span strong',this).parent().attr('style')||"NONE").replace(/^color:#/,'');
      var id= $('a.topictitle',this).attr('href').replace(/^\/t([1-9][0-9]*)-.*$/,'$1');
      var type= ($('dl.icon',this).attr('style')||"NONE").replace(/^background-image:url\('(?:.*\/)?([^'.]+?)(\..*)?'\);$/,'$1')
      var icon= ($('.dterm[style^="background-image:"]',this).attr('style')||"NONE").replace(/^background-image: url\((?:.*\/)?([^'.]+?)(\..*)?\);( position: relative;)?$/,'$1')

      var lastposter= ($('.lastpost a[href^="/u"]',this).attr('href')||"0").replace(/^\/u([1-9][0-9]*).*$/,'$1');
      var lastpostergroup= ($('.lastpost span strong a span strong',this).parent().attr('style')||"NONE").replace(/^color:#/,'');
      
      $(this).addClass('topic t'+id+' type'+type+' icon'+icon+' poster'+poster+' postergroup'+postergroup+' lastposter'+lastposter+' lastpostergroup'+lastpostergroup);
    });
  }
  else if(x=p.match(/^\/c([1-9][0-9]*)-.*$/))
  {
    $('body').addClass('viewcategory id'+x[1]);
  }
  else if($("#i_icon_mini_index").parent().attr("href")==p)
  {
    $('body').addClass('index');
  }
  else if($("#i_icon_mini_portal").parent().attr("href")==p)
  {
    $('body').addClass('portal');
  }
});

