angular.module('bulbsCmsApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/views/autocomplete.html',
    "<div class=input-group ng-dblclick=openMenu()><input class=\"form-control autocomplete-select\" ng-attr-placeholder=\"{{ placeholder }}\"> <span class=input-group-btn ng-show=!isMenuAppended><button class=\"btn btn-default\" type=button ng-click=openMenu()><i class=\"glyphicon glyphicon-pencil\"></i></button></span></div>"
  );


  $templateCache.put('/views/bettyeditable.html',
    "<button class=betty-editable-add-image ng-click=upload(); ng-hide=\"image && image.id\" ng-class=addStyles><span>{{placeholderText}}</span></button><div ng-show=\"image && image.id\" ng-style=imageStyling class=image-edit-container><div class=image-edit-overlay ng-show=editable><div class=remove><button ng-click=removeImage(); class=\"fa fa-trash-o\"></button></div><div class=edit><button name=inline_edit ng-click=edit();>EDIT</button></div></div></div>"
  );


  $templateCache.put('/views/bettyimage.html',
    "<div class=cropped-image></div>"
  );


  $templateCache.put('/views/bug-report-button.html',
    "<button class=\"btn btn-sm bug-report-button\" ng-hide=modalVisible ng-click=showModal()>Report A Bug</button><div ng-show=modalVisible class=bug-report-modal><div class=modal-content><div class=modal-header><button type=button class=close ng-click=dismissModal(); aria-hidden=true>&times;</button><h4 class=modal-title>Tell us what happened</h4></div><div class=modal-body><div ng-hide=showThankYou><section class=form-group><h6>When I tried to:</h6><textarea class=form-control ng-model=report.firstRes></textarea><h6>I thought this would happen:</h6><textarea class=form-control ng-model=report.secondRes></textarea><h6>...but this happened instead:</h6><textarea class=form-control ng-model=report.thirdRes></textarea></section></div><div ng-show=showThankYou><h6>Thanks for taking the time to fill out a bug report!</h6></div></div><div class=modal-footer><button ng-show=showThankYou type=button class=\"btn btn-sm btn-primary\" ng-click=dismissModal();>OK</button> <button ng-hide=showThankYou type=button class=\"btn btn-sm btn-link\" ng-click=dismissModal();>Cancel</button><save-button-old ng-hide=showThankYou class=btn-sm color-styling=btn-primary get-promise=sendToWebtech(); on-save=sendToWebtechCbk(promise) config=reportButton></save-button-old></div></div></div>"
  );


  $templateCache.put('/views/cms-notification.html',
    "<div class=\"panel panel-default\"><div class=panel-heading><h4><div ng-show=$parent.userIsSuperuser><div tooltip=\"{{ !titleValid ? 'Title must be between 0 and 110 characters!' : '' }}\" tooltip-placement=bottom><onion-editor ng-model=notification.title role=singleline placeholder=Title ng-class=\"{'bg-danger text-danger': !titleValid}\"></onion-editor></div></div><div ng-show=!$parent.userIsSuperuser><div ng-bind-html=notification.title></div><div class=header-post-date>{{ postDate.toDate() | date: 'MMM d, yyyy, h:mma' }}</div></div></h4></div><div class=panel-body><onion-editor ng-show=$parent.userIsSuperuser ng-model=notification.body role=multiline placeholder=\"Write here\"></onion-editor><span ng-show=!$parent.userIsSuperuser ng-bind-html=notification.body></span></div><div ng-show=$parent.userIsSuperuser class=\"panel-footer clearfix\"><div class=pull-right><div><label>Post on</label><span datetime-selection-modal-opener ng-model=postDate modal-title=\"Choose Date to Post\" ng-class=\"{'bg-danger text-danger': !postDateValid}\"><span tooltip=\"{{ !postDateValid ? 'This date must occur before promotion end date!' : '' }}\" tooltip-placement=bottom><i class=\"glyphicon glyphicon-calendar\"></i> <span ng-show=postDate>{{ postDate.toDate() | date: 'MMM d, yyyy, h:mma' }}</span> <span ng-show=!postDate>&lt;choose date&gt;</span></span></span></div><div><label>Promote until</label><span datetime-selection-modal-opener ng-model=notifyEndDate modal-title=\"Choose Date to End Notifications\" ng-class=\"{'bg-danger text-danger': !notifyEndDateValid}\"><span tooltip=\"{{ !notifyEndDateValid ? 'This date must occur after post date!' : '' }}\" tooltip-placement=bottom><i class=\"glyphicon glyphicon-calendar\"></i> <span ng-show=notifyEndDate>{{ notifyEndDate.toDate() | date: 'MMM d, yyyy, h:mma' }}</span> <span ng-show=!notifyEndDate>&lt;choose date&gt;</span></span></span></div><div class=btn-group><button class=\"btn btn-success btn-xs\" ng-disabled=\"!notificationDirty || !notificationValid\" ng-click=saveNotification()><i class=\"glyphicon glyphicon-save\"></i> Save</button> <button class=\"btn btn-danger btn-xs\" ng-click=deleteNotification()><i class=\"glyphicon glyphicon-remove\"></i> Delete</button></div></div></div></div>"
  );


  $templateCache.put('/views/cms-notifications.html',
    "<nav-bar view=nav></nav-bar><div id=content-wrapper class=\"container cms-notifications\"><h2 class=heading>Notifications</h2><div class=\"row well well-sm\"><div ng-if=userIsSuperuser class=\"add-notification clearfix\"><span ng-if=\"notifications.length < 1\" class=\"pull-left text-info\"><i class=\"glyphicon glyphicon-info-sign\"></i> No notifications yet, click \"New Notification\" to add one!</span> <button class=\"btn btn-success btn-xs pull-right\" ng-click=newNotification()><i class=\"glyphicon glyphicon-plus\"></i> New Notification</button></div><div ng-if=\"notifications.length > 0\" class=\"col-md-12 panel-group\"><cms-notification ng-repeat=\"notification in notifications\" notification=notification class=cms-notification></cms-notification></div><div ng-if=\"!userIsSuperuser && notifications.length < 1\">No notifications yet, check back soon!</div></div></div>"
  );


  $templateCache.put('/views/cms-notify-container.html',
    "<div ng-repeat=\"notification in notifications\" class=\"cms-notify alert alert-info\"><i class=\"glyphicon glyphicon-info-sign\"></i> <span>New Update: {{ notification.title }}</span> <a href=\"#/cms/app/notifications/\" class=alert-link>Learn More</a> <a href=\"\" class=alert-link ng-click=dismissNotification(notification)>Dismiss</a></div>"
  );


  $templateCache.put('/views/content-list-detail-panel.html',
    "<div class=panel-body><div class=\"pull-left col-sm-3 col-xs-12\"><a class=thumbnail href=#/cms/app/edit/{{article.id}}><static-image image=article.thumbnail></static-image></a></div><div class=\"pull-right col-sm-9 col-xs-12\"><div class=\"pull-right col-xs-5 col-med-7 col-lg-3\"><h6>Actions</h6><div class=form-group hide-if-forbidden options-url=\"/cms/api/v1/content/{{article.id}}/\"><a class=\"form-control btn btn-success\" href=#/cms/app/edit/{{article.id}}>Edit article&nbsp;&nbsp;<i class=\"fa fa-pencil\"></i></a></div><div class=form-group><a class=\"form-control btn btn-primary\" ng-show=\"article.id > -1\" target=_blank href=/r/{{article.id}}>Preview&nbsp;&nbsp;<i class=\"fa fa-share\"></i></a></div><div class=form-group hide-if-forbidden options-url=\"/cms/api/v1/content/{{article.id}}/publish/\"><a class=\"form-control btn btn-primary\" ng-show=\"article.id > -1\" ng-controller=ContentworkflowCtrl ng-click=pubTimeModal(article);>Edit publish time&nbsp;&nbsp;<i class=\"fa fa-calendar\"></i></a></div><div class=form-group hide-if-forbidden options-url=\"/cms/api/v1/content/{{article.id}}/publish/\"><save-button-old class=form-control color-styling=btn-warning ng-show=article.published ng-controller=UnpublishCtrl get-promise=unpublish() on-save=unpublishCbk(promise) confirm-click-with=\"Are you sure you want to unpublish this article?\" config=unpubButton></save-button-old></div><div class=form-group hide-if-forbidden options-url=\"/cms/api/v1/content/{{article.id}}/trash/\"><button ng-controller=ContentworkflowCtrl class=\"form-control btn btn-danger\" role=button ng-hide=article.published ng-click=trashContentModal(article.id);>Delete&nbsp;&nbsp;<i class=\"fa fa-trash\"></i></button></div></div><dl class=\"pull-left col-xs-7 col-med-4 col-lg-9\"><dt>Status</dt><dd><a class=text-success ng-controller=ContentworkflowCtrl ng-show=\"getStatus(article) == 'published'\" ng-click=pubTimeModal(article);>{{ article.published|tzDate:\"EEE',' M/d/yy' at ' h:mm a\" }}</a> <a class=text-info ng-controller=ContentworkflowCtrl ng-show=\"getStatus(article) == 'unpublished'\" ng-click=pubTimeModal(article);>Draft</a> <a class=text-info ng-controller=ContentworkflowCtrl ng-show=\"getStatus(article) == 'scheduled'\" ng-click=pubTimeModal(article);><strong>Scheduled</strong> for {{ article.published|tzDate:\"EEE M/d/yy 'at' h:mm a\" }}</a></dd><dt ng-show=article.authors>Author<span ng-show=\"article.authors.length > 1\">s</span></dt><dd class=author><span ng-repeat=\"author in article.authors\">{{ author.first_name }} {{ author.last_name }}<span ng-show=!$last>,</span></span></dd><dt ng-show=article.feature_type>Feature type</dt><dd class=feature-type>{{ article.feature_type }}</dd><dt ng-show=article.tags>Tags</dt><dd class=section><span ng-repeat=\"tag in article.tags\">{{ tag.name | truncateByWords:3 }}<span ng-show=!$last>,</span></span></dd><dt ng-show=article.id>Article ID</dt><dd>{{ article.id }}</dd></dl></div></div>"
  );


  $templateCache.put('/views/contentedit.html',
    "<nav-bar view=toolbar article=article></nav-bar><div class=container><div id=info-row><div id=alert-area><div class=\"alert alert-danger errors-panel\" ng-show=errors><dl ng-repeat=\"(field, errorList) in errors\" class=\"dl-horizontal small\"><dt>{{field}}</dt><dd ng-repeat=\"error in errorList\">{{error}}</dd></dl></div></div></div><div class=\"edit-page row\"><div id=content-wrapper class=container><div ng-if=article.polymorphic_ctype ng-include=\"CONTENT_PARTIALS_URL + article.polymorphic_ctype + '.html'\"></div><h4 ng-if=!article.polymorphic_ctype style=text-align:center>Error: article has no content type.</h4></div><div class=status-bar><span class=wordcount></span></div></div></div><script>$(\".image-modal\").on(\"shown.bs.modal\", function(){\r" +
    "\n" +
    "    window.picturefill();\r" +
    "\n" +
    "});</script>"
  );


  $templateCache.put('/views/contentlist.html',
    "<nav-bar view=nav></nav-bar><div class=container><cms-notify-container class=cms-notify-container></cms-notify-container><div class=\"row filter-shortcuts\" role=navigation><div class=\"navbar-btn navbar-left\" role=toolbar><status-filter></status-filter></div><div class=\"navbar-btn navbar-right\" role=toolbar><create-content></create-content></div></div><div class=row><div class=\"col-xs-12 navbar-btn filterwidget-container\" style=\"padding: 0\"><filter-widget></filter-widget></div></div><div class=row><table class=\"panel-group col-xs-12 table table-condensed table-bordered table-striped\" id=contentListAccordion><tr ng-if=\"contentData.totalItems === 0\"><td><h1 class=\"h4 text-center\">No content here</h1></td></tr><tr class=\"panel panel-default\" ng-repeat=\"article in contentData.content | filter:text_filter\"><td><div class=\"panel-heading row\" data-toggle=collapse href=\"#collapse-{{ article.id }}\" ng-click=\"collapse[article.id] = !collapse[article.id]\"><div class=\"heading col-xs-12 col-sm-8\"><strong>{{ article.feature_type }}</strong><br><a class=\"panel-title collapsed\" ng-bind-html=\"article.title | truncateByWords:15\"></a></div><div class=\"published col-xs-12 col-sm-4\"><div class=\"publish-widget small\" ng-hide=\"article.id == -1\"><span ng-show=article.authors>By {{ article.authors[0].first_name | truncateByCharacters: 1 }} {{ article.authors[0].last_name }} <span ng-show=\"article.authors.length > 1\">and {{ article.authors.length - 1}} others</span> &middot;</span> <a class=text-success ng-controller=ContentworkflowCtrl ng-show=\"getStatus(article) == 'published'\" ng-click=pubTimeModal(article);>{{ article.published|tzDate:\"EEE',' M/d/yy' at ' h:mm a\" }}</a> <a class=text-info ng-controller=ContentworkflowCtrl ng-show=\"getStatus(article) == 'unpublished'\" ng-click=pubTimeModal(article);>Draft</a> <a class=text-info ng-controller=ContentworkflowCtrl ng-show=\"getStatus(article) == 'scheduled'\" ng-click=pubTimeModal(article);><strong>Scheduled</strong> for {{ article.published|tzDate:\"EEE M/d/yy 'at' h:mm a\" }}</a></div></div></div><div id=\"collapse-{{ article.id }}\" class=\"panel-collapse collapse\" lazy-include template=content-list-detail-panel.html><span class=\"fa fa-spinner fa-spin\"></span></div></td></tr></table></div><div class=row><pagination max-size=10 total-items=contentData.totalItems ng-model=pageNumber items-per-page=20 ng-change=goToPage(page); boundary-links=true></pagination></div></div>"
  );


  $templateCache.put('/views/contributions.html',
    "<nav-bar view=toolbar article=content></nav-bar><div class=container><div class=row><div id=contributions class=\"container col-xs-12 col-sm-pull-1 col-sm-push-1 col-sm-10 col-md-pull-2 col-md-push-2 col-md-8\"><div class=\"contribution panel panel-default\" ng-repeat=\"contribution in contributions\"><div class=panel-heading data-toggle=collapse href=#contribution{{$index}}><b>{{ contribution.contributor.getFullName() }}&nbsp;</b><span class=\"label label-default\" ng-bind=contributionLabels[$index]></span><a class=pull-right ng-click=remove($index)><i class=\"glyphicon glyphicon-remove text-danger\"></i></a></div><div id=contribution{{$index}} ng-class=\"{collapse: true, in: collapsed[$index] == false}\"><div class=panel-body><div class=row><div class=\"form-group col-sm-6\"><autocomplete type=text ng-model=contribution.contributor service=AuthorService label-attr=getFullName search-param=search ng-class=\"{'has-error': !contribution.contributor}\" placeholder=\"Search for author\"></autocomplete></div><div class=\"role col-sm-6\" ng-class=\"{'has-error': !contribution.role}\"><select name=role class=\"form-control form-group\" ng-change=updateLabel($index) ng-options=\"role.id as role.name for role in roles\" ng-model=contribution.role></select></div></div><div class=form-group><textarea class=form-control rows=3 placeholder=Notes ng-model=contribution.notes></textarea></div></div></div></div><div class=\"form-group pull-right\"><button class=\"btn btn-success\" ng-click=add()>Add Contributor</button></div></div></div></div>"
  );


  $templateCache.put('/views/create-content.html',
    "<div class=btn-group><a href=# data-target=#create role=button class=\"btn btn-primary\" data-toggle=modal><i class=\"fa-plus-circle fa\"></i> Create content</a></div><div id=create class=\"modal fade\" tabindex=-1 role=dialog aria-labelledby=create-new aria-hidden=true data-backdrop=false><div class=modal-dialog><div class=modal-content><div class=modal-header><button type=button class=close data-dismiss=modal aria-hidden=true>&times;</button><h4 class=modal-title>Create Content</h4></div><div class=modal-body><div class=\"form-group container-fluid\" ng-show=\"panel == 1\" id=createcontent-01><div id=choose-articletype class=row><section id=choose-contenttype class=\"primary col-xs-4\" data-toggle=buttons><h5>1. Choose a type:</h5><ul class=\"nav nav-pills nav-stacked\"><li><a class=create-content data-toggle=pill data-content_type=core_shortarticle href=#create-shortform value=\"Short feature\">Short feature</a></li><li><a class=create-content data-toggle=pill data-content_type=core_article href=#create-longform value=\"Longform feature\">Longform feature</a></li><li><a class=create-content data-toggle=pill data-content_type=reviews_review href=#create-review value=Review>Review</a></li><li><a class=create-content data-toggle=pill data-content_type=core_video href=#create-video value=Video>Video</a></li><li><a class=create-content data-toggle=pill data-content_type=core_externallink href=#create-link value=\"Linked content\">Linked content</a></li></ul></section><div class=\"tab-content col-xs-8\"><section id=create-shortform class=\"tab-pane fade panel panel-default\"><div class=panel-heading><h6 class=panel-title>Short feature</h6></div><div class=panel-body><figure class=thumbnail><img src=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATIAAADzCAMAAAAy22pSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACFQTFRFQEBAgICAz8/P39/fn5+f7+/vcHBwv7+/f39/AAAA////jWzwgQAABHNJREFUeNrs3et6oyAQgGEUUyj3f8Hbbp94SMCZkagkfvOz5dC+3RWcjOgSYQwHAWSQQQYZZARkkDVFFr7L8b/dtxwxP86iexTmMkXlD7YYBzLIIIMMMsgggwwyyCCDrER2C+X4/X4f5PD5cRbdvTCXKSp/sMU43JaTyYAMMsgIyI7Pyu67U/tWjgMZZJBBBhlkkEEGGWSQQXYS2e3IdKi2+2IcbsvJZEBGQAZZE2QhvnOE/X+L8EQW3RuLuTj+Ft1OMU4xI4tv/H9l/OFjt9cU3YeRdR1kkEEGGWSQQQYZZJBBBhlkkEEGGWSQQQYZZJBBBhlkkEEGGWSQQQYZZJBBBhlkkEEGGWSQQQYZZJBBBhlkkEEGGWSQQQYZZJBBBhlkkEEGGWSQQQYZZJBBBhlkkEEGGWSQQQYZZJApyDgk1Up27FG8H0F2REAGGWSQQQYZZJBBBtkeZNm3lrkU728NK71kbGwyfylZuH8PMsggg+xYMp9LQgz3DEdIQyFPMWSSIPfBBlZMVkzIIDuYrHeF6FP2y4oOl9zK/kZI+Vfwyh0ggwwyrmWsmJBBVke220fzB4QbyaRX1t9S/t31t3kTJVmIb0zWBXHF1C+cQUv2IQEZZJA1GEde/gnzJoOADLIGyWJ5lemm9eSnubAkdaVFK6RObJNrnJuiebJoIYtlsii2yTXOTQEZZJBBViAbXDGGKdv7lZJbj6GUGu6nKYZy+vi5cW4KNhnsy84Mr6tf8SlfsRKzhStXymQUq6QeExpP/SDbhcwLWZOU+ik7IjXO9colYion9eeSRWHZT9OkQWyc62XcSWgmjZC9gKyRrSxkkEF2Fpn0VHaaNoNe/wh3KpZAq8YRJg22T5ic/Ccq1MBf9kM5yCCDrInbcvkJktW787j+dEnu4upzvauv+oYBS+OcmjFb2WTkcqdyVlbeWxgGLI3jIIPsRLK+vhR77HcRslBf8C/VTEG2nSyXwHsu1vr511qdWTQMWBqnb4LsQ+LIaxnB55iQNUg2bKgZMBQGpPSlHOKxhmEwXXVu2oLi+TLXK9YVW1ZWrjqRE63btx3RtLapV8z5BM50WwEZZJBBtjvZkZd/gn0ZZJBBdkmyaK7AeFgEldlH/RKsKZiHDDLIIIPspfmyWXpLmwKTn9UxJuA0D/+wyagPL9SAjI+VZFrOHzkJ1yFTn5Mh5DwiZJBB9p5kceNWQE4xVmYol88ct3uPCRlkkEH2OrKN55eJFVRBvGEy1hWsFhhU1icsz09oiexqmwzIINv/ttzwdMlfPz4uecGKWX0ogbpQ2HAAgnReQWubDHthua6X4aHhBnKwn0/WPyR2B93u5qnfhcgK52SIv9Qe52RABlk9WfWhBOqHUf3Gd9iH1q5lxFU/lIMMsv3Denj9vUO/gSysXXe9/giCYmPTcTXRduxN2JzJKLxptXaTsZpWVdecmw5FMmduIYMMsobJjrz8fwhZIylGv/a3e8wsFhubjkQNtqNVPfsytrKQQUZABhlkkF0v/gkwALTMq2BDAp2OAAAAAElFTkSuQmCC alt=\"Short feature preview\"></figure><div class=row><h5 class=\"text-muted col-xs-12\">Use this type for the following:</h5><ul class=\"list-unstyled small\"><li class=col-xs-6><a href=# class=\"create-content go-next\" data-content_type=core_shortarticle data-init=\"{&quot;feature_type&quot;: &quot;Newswire&quot;}\">Newswire</a></li><li class=col-xs-6><a href=# class=\"create-content go-next\" data-content_type=core_shortarticle data-init=\"{&quot;feature_type&quot;: &quot;Great Job, Internet!&quot;}\">Great Job, Internet!</a></li><li class=col-xs-6><a href=# class=\"create-content go-next\" data-content_type=core_shortarticle data-init=\"{&quot;feature_type&quot;: &quot;Watch This&quot;}\">Watch This</a></li><li class=col-xs-6><a href=# class=\"create-content go-next\" data-content_type=core_shortarticle data-init=\"{&quot;feature_type&quot;: &quot;Hear This&quot;}\">Hear This</a></li><li class=col-xs-6><a href=# class=\"create-content go-next\" data-content_type=core_shortarticle data-init=\"{&quot;feature_type&quot;: &quot;Coming Distractions&quot;}\">Coming Distractions</a></li></ul></div></div></section><section id=create-longform class=\"tab-pane in active panel panel-default\"><div class=panel-heading><h6 class=panel-title>Longform feature</h6></div><div class=panel-body><figure class=thumbnail><img src=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATIAAAEgCAMAAAAABg9nAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACFQTFRFf39/gICAQEBAv7+/n5+fz8/P39/fcHBw7+/vAAAA////0FzXCwAAA0dJREFUeNrs3NtuozAUBVDHXJLw/x88iTTVlMbXABlUrf1Utfg4WmqLsY4Ji3QmIECGDBkyZILsULIhSDHDC1mIFykkhleyiz+5Ui7IkCFDhgwZMmTIkCFDJsiQIUOGTJAhQ4YMGTJkyJAhQ4YMGTJkyJAhE2TIkCFDJsiQIUOGDBkyZMiQIUOGDBkyZMiQCTJkyJAhE2TIkCFDhgwZMmTIkCETZMiQIUMmyJAhQ4ZMkCFDhgwZMmTIkCFDhkyQIUOGDJkgQ4YMGTJkyJAhQ4YMGTJkyJAhQybIkCFDhkyQIUOGDBkyZMiQIUOGDBkyZMiQIRNkyJAhQybIkCFDhgwZMmTIkCFDJsiQnY4sXqSQ+Eo2BClmeCGT1iBDhgwZMmSC7MNkwz2f58/jvZ6QrrMaHipzdWXjB1vVQYYMGTJkyJAhQ4YMGbJcbkM+z59PQz1zus5q+FyZqysbP9iqjsdyOxnIkCETZOcg61o/Pe/ioeG6mK7cOnxdBxkyZMiQIUOGDBkyZMj+E1nX7untMWBuuG5KV24dvq7jsdxOBjJkggzZ123bGabu34D4wZNyY8xmXKavL6/LEsv5dvE6078pstekLk5NkSc77FRp6jxmqYFh+LaKrnY7DLkFf6hek7o43VCBDBkyZMj2IfsliwxkyJAhQ7bbHfNvj3Jsup1lR3XeFlsmDciQIUOGbCvZWNnBWpZr02ZWdlTnpljLpKNFhnUZMmTItpLNiQN4t1Q7SNsZv6m9v+SNOtNJH5hSG4GxrSmq7RxpvWCuTkSGDBkyZDuRDYm+jfnle49HlJaWj8fzV2NzSLlgrs5oXWYpiwwZssP+/RfvA5nMuTrv3xDqs8/n25UN7e/kyW60vr/saGngQIYMGTJk+20xFvcasyfg5r03Heuz36zLLGWRIUP2NtnY3U7wo3mgflYnth/IaT38c6Jd2ZamlR/rhth+Ir9t1dLSMI8MGTJkyCwykCFDhgzZ1gem9seaepN1R53K8Ou5yMKWzdh7uTt/2Gl4RIYMGTJkFhnIkCFDhuyQO2Z/Y/nuh4aLBZEhQ4YM2SH7ZZ0vJSj3A7z3AoRiwSTZJ1+S+jviVbznXPshQIYMGTJkguyI/BFgAOgZqN3NpnvIAAAAAElFTkSuQmCC alt=\"Longform feature preview\"></figure><div class=row><h5 class=\"text-muted col-xs-12\">Use this type for the following:</h5><ul class=\"list-unstyled small\"><li class=col-xs-6><a href=# class=\"create-content go-next\" data-content_type=core_article data-init=\"{&quot;feature_type&quot;: &quot;Inventory&quot;}\">Inventory</a></li><li class=col-xs-6><a href=# class=\"create-content go-next\" data-content_type=core_article data-init=\"{&quot;feature_type&quot;: &quot;AVQ&A&quot;}\">AVQ&amp;A</a></li><li class=col-xs-6><a href=# class=\"create-content go-next\" data-content_type=core_article data-init=\"{&quot;feature_type&quot;: &quot;Interview&quot;}\">Interview</a></li><li class=col-xs-6><a href=# class=\"create-content go-next\" data-content_type=core_article data-init=\"{&quot;feature_type&quot;: &quot;For Our Consideration&quot;}\">For Our Consideration</a></li><li class=col-xs-6><a href=# class=\"create-content go-next\" data-content_type=core_article data-init=\"{&quot;feature_type&quot;: &quot;What&#39;s On Tonight&quot;}\">What's On Tonight</a></li><li class=col-xs-6><a href=# class=\"create-content go-next\" data-content_type=core_article data-init=\"{&quot;feature_type&quot;: &quot;Podmass&quot;}\">Podmass</a></li><li class=col-xs-6><a href=# class=\"create-content go-next\" data-content_type=core_article data-init=\"{&quot;feature_type&quot;: &quot;Big Issues&quot;}\">Big Issues</a></li></ul></div></div></section><section id=create-review class=\"tab-pane fade panel panel-default\"><div class=panel-heading><h6 class=panel-title>Reviews</h6></div><div class=panel-body><div class=\"callout type-tv\"><h4>TV</h4><a href=# class=\"create-content go-next\" data-content_type=reviews_tvepisodereview data-init=\"{&quot;feature_type&quot;: &quot;TV Club&quot;}\" data-tag=tv data-rating_type=tvepisode>Episode</a> &middot; <a href=# class=\"create-content go-next\" data-content_type=reviews_tvepisodereview data-init=\"{&quot;feature_type&quot;: &quot;TV Club Classic&quot;}\" data-tag=tv data-rating_type=tvepisode>Classic Episode</a> &middot; <a href=# class=\"create-content go-next\" data-content_type=reviews_review data-init=\"{&quot;feature_type&quot;: &quot;TV Review&quot;}\" data-tag=tv data-rating_type=tvseason>Full Season</a></div><div class=\"callout type-film\"><h4>Film</h4><a href=# class=\"create-content go-next\" data-content_type=reviews_review data-init=\"{&quot;feature_type&quot;: &quot;Movie Review&quot;}\" data-tag=film data-rating_type=movie>Theatrical</a> &middot; <a href=# class=\"create-content go-next\" data-content_type=reviews_review data-init=\"{&quot;feature_type&quot;: &quot;DVD Review&quot;}\" data-tag=film data-rating_type=movie>Home Video</a></div><div class=\"callout type-music\"><h4>Music</h4><a href=# class=\"create-content go-next\" data-content_type=reviews_review data-init=\"{&quot;feature_type&quot;: &quot;Music Review&quot;}\" data-tag=music data-rating_type=album>Album</a></div><div class=\"callout type-books\"><h4>Books</h4><a href=# class=\"create-content go-next\" data-content_type=reviews_review data-init=\"{&quot;feature_type&quot;: &quot;Book Review&quot;}\" data-tag=books data-rating_type=book>Book</a></div><div class=\"callout type-comedy\"><h4>Comedy</h4><a href=# class=\"create-content go-next\" data-content_type=reviews_review data-init=\"{&quot;feature_type&quot;: &quot;Comedy Album Review&quot;}\" data-tag=comedy data-rating_type=album>Album</a> &middot; <a href=# class=\"create-content go-next\" data-content_type=reviews_review data-init=\"{&quot;feature_type&quot;: &quot;Comedy Special Review&quot;}\" data-tag=comedy data-rating_type=movie>Special</a></div></div></section><section id=create-video class=\"tab-pane fade panel panel-default\"><div class=panel-heading><h6 class=panel-title>Video</h6></div><div class=panel-body><p>Bet you can't guess what kind of content this is!</p></div></section><section id=create-link class=\"tab-pane fade panel panel-default\"><div class=panel-heading><h6 class=panel-title>Linked content</h6></div><div class=panel-body><p>This type is for linking to content elsewhere on the web.</p></div></section></div></div></div><section class=\"form-group enter-title\" ng-show=\"panel == 2\" id=createcontent-02><h5>2. Enter a headline <small>(You'll be able to change this later.)</small></h5><onion-editor id=content-title class=\"article-header heading title new-title\" role=singleline ng-model=newTitle></onion-editor><p class=\"text-muted small\"><em>Adding placeholder title text helps you find this content while it's still in a draft state.</em></p></section></div><div class=modal-footer><button class=\"btn btn-default pull-left\" ng-show=\"panel == 2\" ng-click=\"panel = 1;\" aria-hidden=true>Back</button> <button class=\"btn btn-default\" data-dismiss=modal aria-hidden=true>Cancel</button> <button class=\"btn btn-primary next-pane\" aria-hidden=true ng-show=\"panel == 1\" ng-click=\"panel = 2;\">Next <span class=\"fa fa-angle-double-right\"></span></button> <button type=button class=\"btn btn-success go\" ng-show=\"panel == 2\" ng-class=\"{ disabled: !newTitle || newTitle.length === 0 }\" ng-click=newArticle();>Create article</button></div></div></div></div><script>function showEnterTitle(){\r" +
    "\n" +
    "      $(\"#create .choose-content-type\").fadeOut(200, function(){\r" +
    "\n" +
    "          $(\"#create .enter-title\").fadeIn(200, function(){\r" +
    "\n" +
    "              $(\"#create .enter-title input.new-title\").focus();\r" +
    "\n" +
    "          });\r" +
    "\n" +
    "      });\r" +
    "\n" +
    "  }\r" +
    "\n" +
    "  function showChooseContentType(){\r" +
    "\n" +
    "      $(\"#create .enter-title\").fadeOut(200, function(){\r" +
    "\n" +
    "          $(\"#create .choose-content-type\").fadeIn(200);\r" +
    "\n" +
    "      });\r" +
    "\n" +
    "  }\r" +
    "\n" +
    "\r" +
    "\n" +
    "  $('#create').on('show.bs.modal', function(){\r" +
    "\n" +
    "      $(\"#choose-contenttype a.create-content:first\").click();\r" +
    "\n" +
    "  });</script>"
  );


  $templateCache.put('/views/devicepreview.html',
    "<section id=page-prev class=\"well well-sm\"><h3 class=\"h5 modal-title\" data-target=#preview-expand data-toggle=collapse>Page preview <small>Click to expand</small><span class=\"fa fa-plus-square-o pull-right\"></span></h3><div class=\"inner collapse\" style=overflow:hidden id=preview-expand><ul class=\"nav nav-pills nav-stacked pull-left\"><li class=active><a href=#device-lg data-toggle=tab>Large</a></li><li><a href=#device-md data-toggle=tab>Medium</a></li><li><a href=#device-sm data-toggle=tab>Small</a></li></ul><div class=tab-content><div class=\"tab-pane active in\" id=device-lg><div><div class=\"inner cf\"><div ng-repeat=\"article in promotedArticles track by $index\" data-index={{$index}}><div ng-if=article.image.id style=\"position: relative\"><img class=loading-image style=\"width: 100%\" src=/static/cms/img/loading.gif><div data-index={{$index}} class=\"media-object pull-left article-0{{$index+1}} image\" data-type=image data-format=jpg data-alt={{article.title}} responsive-image image-id=\"{{ article.image.id }}\" crop=16x9><div></div></div></div><span ng-if=!article.image.id class=\"no-image text-large\"><i class=\"fa-exclamation-triangle fa\"></i><span>No image selected.</span></span></div></div></div></div></div></div></section>"
  );


  $templateCache.put('/views/editor.html',
    "<div class=editor-wrapper><div class=editorPlaceholder></div><div class=editor contenteditable=true></div><div class=\"document-tools toolbar fixed\"><div class=toolbar-contents><button data-command-name=linkUI><span class=\"fa fa-link\"></span><span class=btn-label>Link</span></button> <button data-command-name=bold><span class=\"fa fa-bold\"></span><span class=btn-label>Bold</span></button> <button data-command-name=italic><span class=\"fa fa-italic\"></span><span class=btn-label>Italic</span></button> <button data-command-name=h4><span class=heading-icon>H<sub>2<sub></sub></sub></span><span class=btn-label>Sub Heading</span></button> <button data-command-name=h3 class=hiddenbydefault><span class=heading-icon>H<sub>1</sub></span><span class=btn-label>Heading</span></button> <button class=hiddenbydefault data-command-name=blockquote><span class=\"fa fa-quote-left\"></span><span class=btn-label>Block quote</span></button> <button class=hiddenbydefault data-command-name=insertOrderedList><span class=\"fa fa-list-ol\"></span><span class=btn-label>Numbered List</span></button> <button class=hiddenbydefault data-command-name=insertUnorderedList><span class=\"fa fa-list-ul\"></span><span class=btn-label>Bullet List</span></button> <button class=hiddenbydefault data-command-name=strikeThrough><span class=\"fa fa-strikethrough\"></span><span class=btn-label>Strikethrough</span></button> <button class=hiddenbydefault data-command-name=toggleAnchor><span class=\"fa fa-anchor\"></span><span class=btn-label>Add Anchor</span></button> <button class=hiddenbydefault data-command-name=removeFormat><span class=\"fa fa-times\"></span><span class=btn-label>Remove Formatting</span></button></div></div><div class=\"embed-tools embed-overlay\"><button data-command-name=embed-before class=\"embed-button insert-above\"><span class=\"fa fa-plus-circle\" data-command-name=show></span></button> <button data-command-name=embed-after class=\"embed-button insert-below\"><span class=\"fa fa-plus-circle\"></span></button></div><div class=embed-fly-out style=\"display: none\"><button data-command-name=image title=Image><span class=\"fa fa-picture-o\"></span><span class=btn-label>Image</span></button> <button data-command-name=onion-video title=\"Upload Video\"><span class=\"fa fa-film\"></span><span class=btn-label>Upload Video</span></button> <button data-command-name=youtube title=Youtube><span class=\"fa fa-youtube\"></span><span class=btn-label>Youtube Video</span></button> <button data-command-name=embed title=\"Embed Something\"><span class=\"fa fa-code\"></span><span class=btn-label>Embed</span></button> <button data-command-name=hr title=HR><span class=\"fa fa-minus\"></span><span class=btn-label>Horizontal Rule</span></button></div><div class=\"inline-tools toolbar\" style=\"display: none\"><div class=\"top toolbar-contents\"><div><button data-command-name=inline_up class=\"fa fa-arrow-up\"></button> <button data-command-name=inline_down class=\"fa fa-arrow-down\"></button> <button class=\"size inline-attribute\" data-command-name=inline_size></button> <button class=\"crop inline-attribute\" data-command-name=inline_crop></button></div></div><div class=remove><button data-command-name=inline_remove class=\"fa fa-trash-o\"></button></div><div class=edit><button data-command-name=inline_edit>Edit</button> <button data-command-name=inline_caption>Caption</button></div></div><div class=\"link-tools toolbar\" style=display:none><input class=link-url placeholder=\"Enter URL or Search\"> <button class=ok>OK</button> <button class=remove>Remove</button><div class=search-results></div></div><div class=\"embed-modal modal fade bs-modal-lg edit-page\" tabindex=-1 role=dialog aria-labelledby=extra-info aria-hidden=true data-backdrop=true><div class=\"modal-dialog modal-lg\"><div class=modal-content><div class=modal-header><h4 class=modal-title>Embed something</h4></div><div class=modal-body><label>Embed code</label><textarea class=embed-body></textarea><div class=\"embed-error alert alert-danger\" style=display:none><strong>Can't embed nothin'</strong>. Be sure to enter something into the embed code field.</div><label>Caption (optional)</label><input class=embed-caption></div><div class=modal-footer><button class=\"btn btn-default\" data-dismiss=modal aria-hidden=true>Cancel</button> <button class=\"set-embed-button btn btn-primary\" aria-hidden=true>Embed</button></div></div></div></div></div>"
  );


  $templateCache.put('/views/encode-status.html',
    "<div ng-show=encodingVideos style=\"position: fixed; left: 0px; top: 50%\"><ul><li ng-repeat=\"video in encodingVideos\" ng-show=\"video.job_status.state == 'processing' || video.job_status.state == 'waiting'\"><div>Video {{video.id}}</div><div ng-show=video.job_status.progress>{{video.job_status.progress | number:0}}%</div><div ng-show=\"video.job_status.state == 'waiting'\">0%</div></li></ul></div>"
  );


  $templateCache.put('/views/image-crop-modal.html',
    "<div class=image-cropper-modal tabindex=1><div class=modal-header><button type=button class=close ng-click=$dismiss(); aria-hidden=true>&times;</button><h4 class=modal-title ng-hide=cropMode>Edit Image Options</h4><h4 class=modal-title ng-show=cropMode>Crop Image</h4></div><div class=modal-body><div ng-hide=cropMode><h5>Set Image Crops</h5><ul class=thumb-list><li ng-repeat=\"ratio in ratios\"><div class=cropped-thumb-container ng-style=thumb_container_styles[ratio] ng-click=selectCrop(ratio)><div ng-style=thumb_styles[ratio] class=cropped-thumb></div></div><span class=fa ng-class=isCropDone(ratio)><strong>{{ ratio }}</strong></span></li></ul><div ng-show=\"imageData.hasOwnProperty('caption')\" class=caption-container><hr><div class=row><div class=\"form-group col-md-6\"><label class=\"control-label small\">Caption / Photo Credit</label><input class=form-control placeholder=\"Brief explanation of image\" ng-model=\"imageData.caption\"></div><div class=\"form-group col-md-6\"><label class=\"control-label small\">Alt Text</label><input class=form-control placeholder=\"Describe image's contents\" ng-model=\"imageData.alt\"></div></div></div></div><div ng-show=cropMode><div class=crop-image-container><img ng-src=\"{{ image_url }}\" width=\"{{ scaleData.width }}\" height=\"{{ scaleData.height }}\"></div><div class=ratio-paginator><span ng-repeat=\"ratio in ratios\" ng-class=image.selections[ratio].source class=fa ng-click=selectCrop(ratio)>{{ ratio }}</span></div></div></div><div class=modal-footer><div ng-hide=cropMode><button class=\"btn btn-success\" ng-click=$close(imageData);>Done</button></div><div ng-show=cropMode><button class=\"btn btn-link\" ng-click=saveAndQuit() ng-hide=finished>Save and Finish</button> <button class=\"btn btn-success\" ng-click=saveAndNext() ng-hide=finished>Save & Continue</button> <button class=\"btn btn-success\" ng-click=saveAndQuit() ng-show=finished>Save & Finish</button></div></div></div>"
  );


  $templateCache.put('/views/logged-in-user.html',
    "<li class=dropdown><a href=# class=dropdown-toggle data-toggle=dropdown>Logged in as {{ current_user.data|user }} <b class=caret></b></a><ul class=dropdown-menu><li><a href=\"/cms/api/v1/me/logout/\">Logout</a></li></ul></li>"
  );


  $templateCache.put('/views/mainvideo.html',
    "<style>.video-container{\r" +
    "\n" +
    "\t\tposition: relative;\r" +
    "\n" +
    "\t\twidth: 818px;\r" +
    "\n" +
    "\t\theight: 460px;\r" +
    "\n" +
    "\t}\r" +
    "\n" +
    "\t.video-container iframe{\r" +
    "\n" +
    "\t\twidth: 100%;\r" +
    "\n" +
    "\t\theight: 100%;\r" +
    "\n" +
    "\t}\r" +
    "\n" +
    "\t.video-container-edit{\r" +
    "\n" +
    "\t\tposition: absolute;\r" +
    "\n" +
    "\t\ttop: 0px;\r" +
    "\n" +
    "\t\twidth: 100%;\r" +
    "\n" +
    "\t\theight: 100%;\r" +
    "\n" +
    "\t\tbackground-color: rgba(100,100,100,0.5);\r" +
    "\n" +
    "\t\tcolor: white;\r" +
    "\n" +
    "\t\tpadding: 15px;\r" +
    "\n" +
    "\t}\r" +
    "\n" +
    "\t.video-container-edit input{\r" +
    "\n" +
    "\t\twidth: 225px;\r" +
    "\n" +
    "\t}\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t.video-container .edit-button{\r" +
    "\n" +
    "\t\tposition: absolute;\r" +
    "\n" +
    "\t\ttop: 15px;\r" +
    "\n" +
    "\t\tleft: 15px;\r" +
    "\n" +
    "\t}\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t.video-container button{\r" +
    "\n" +
    "\t\tposition: absolute;\r" +
    "\n" +
    "\t\ttop: 15px;\r" +
    "\n" +
    "\t\tdisplay: none;\r" +
    "\n" +
    "\t\tz-index: 30;\r" +
    "\n" +
    "\t}\r" +
    "\n" +
    "\t.video-container .clear-button{ right: 15px; }\r" +
    "\n" +
    "\t.video-container .edit-button{ left: 15px; }\r" +
    "\n" +
    "\t.video-container:hover button{\r" +
    "\n" +
    "\t\tdisplay: block;\r" +
    "\n" +
    "\t}</style><button ng-hide=\"article && article.video\" ng-click=addVideo(); class=\"add-video-button fa fa-video-camera add-feature-image\"><span>Click to add video</span></button><div class=video-container ng-show=\"article && article.video\" data-videoid={{video.id}}><iframe src=\"{{embedUrl || ''}}\" name=embedded allowfullscreen webkitallowfullscreen=\"\" mozallowfullscreen=\"\" frameborder=no scrolling=no></iframe><button class=\"btn btn-info edit-button\">Edit</button> <button class=\"btn btn-danger clear-button\" ng-click=clearVideo();>Clear</button></div><div id=confirm-clear-video-modal class=\"modal fade edit-page\" tabindex=-1 role=dialog aria-labelledby=confirm-clear-video aria-hidden=true data-backdrop=true><div class=modal-dialog><div class=modal-content><div class=modal-header><button type=button class=close data-dismiss=modal aria-hidden=true>&times;</button><h4 class=modal-title>Clear video</h4></div><div class=modal-body>Are you sure you want to clear this video?</div><div class=modal-footer><button class=\"btn btn-link\" data-dismiss=modal aria-hidden=true>Cancel</button> <button id=clear-video-confirm-button class=\"btn btn-danger\" data-dismiss=modal aria-hidden=true ng-click=clearVideo(true);>Clear</button></div></div></div></div>"
  );


  $templateCache.put('/views/modals/400-modal.html',
    "<div class=modal-header><button type=button class=close ng-click=$dismiss(); aria-hidden=true>&times;</button><h4 class=modal-title>Bad Request</h4></div><div class=modal-body><div ng-repeat=\"(field, errorList) in detail\"><h5>{{field}}</h5><p ng-repeat=\"error in errorList\">{{error}}</p></div></div><div class=modal-footer><button class=\"btn btn-default\" aria-hidden=true ng-click=$dismiss();>OK</button></div>"
  );


  $templateCache.put('/views/modals/403-modal.html',
    "<div class=modal-header><button type=button class=close ng-click=$dismiss(); aria-hidden=true>&times;</button><h4 class=modal-title>Insufficient permissions</h4></div><div class=modal-body><h5>{{detail}}</h5></div><div class=modal-footer><button class=\"btn btn-default\" aria-hidden=true ng-click=$dismiss();>OK</button></div>"
  );


  $templateCache.put('/views/modals/changelog-modal.html',
    "<div class=modal-header><button type=button class=close ng-click=$dismiss(); aria-hidden=true>&times;</button><h4 class=modal-title>Changelog</h4></div><div class=modal-body><ul class=list-group><li class=list-group-item ng-repeat=\"entry in changelog\" ng-class=\"{&quot;list-group-item-success&quot;: entry.change_message == &quot;Published&quot;, &quot;list-group-item-info&quot;: entry.change_message == &quot;Scheduled&quot;, &quot;list-group-item-warning&quot;: entry.change_message == &quot;Waiting for Editor&quot;}\"><h4 class=list-group-item-heading>{{entry.change_message}}</h4><p class=list-group-item-text>{{users[entry.user]|user}}</p><p class=list-group-item-text>{{entry.action_time|tzDate:\"MMMM d, yyyy 'at' h:mm a\"}}</p></li></ul></div><div class=modal-footer><button class=\"btn btn-default\" aria-hidden=true ng-click=$dismiss();>Close</button></div>"
  );


  $templateCache.put('/views/modals/confirm-trash-modal.html',
    "<div class=modal-header><button type=button class=close ng-click=$dismiss(); aria-hidden=true>&times;</button><h4 class=modal-title>Delete content</h4></div><div class=modal-body>Are you sure you want to delete this content?</div><div class=modal-footer><button class=\"btn btn-link\" aria-hidden=true ng-click=$dismiss();>Cancel</button><save-button-old color-styling=btn-danger-copy get-promise=trashContent() on-save=trashCbk(promise) config=deleteButton></save-button-old></div>"
  );


  $templateCache.put('/views/modals/datetime-selection-modal.html',
    "<div class=modal-header><button type=button class=close ng-click=$dismiss(); aria-hidden=true>&times;</button><h4 class=modal-title>{{ modalTitle || 'Choose a Time' }}</h4></div><div class=modal-body><div class=well><div class=\"date-dropdown dropdown\"><label>Date</label><div class=input-group><input readonly class=\"form-control disabled uneditable-input\" value=\"{{ tempDatetime | tzDate: 'shortDate' }}\"><div class=input-group-btn><a class=\"btn-default btn\" ng-click=setDateToday()>Today</a> <a class=\"btn-default btn\" ng-click=setDateTomorrow()>Tomorrow</a> <a class=\"btn btn-default dropdown-toggle\" data-toggle=dropdown><i class=\"glyphicon glyphicon-calendar\"></i></a><ul class=\"dropdown-menu pull-right calendar-dropdown\" role=menu aria-labelledby=dLabel><datetimepicker ng-model=tempDatetime on-set-time=setDate datetimepicker-config=\"{ dropdownSelector: '.calendar-dropdown', minView: 'day' }\"></datetimepicker></ul></div></div></div></div><div class=well><label>Time ({{ TIMEZONE_LABEL }})</label><div class=row><div class=\"col-sm-4 col-xs-12\"><timepicker ng-model=tempDatetime minute-step=5 mousewheel=false></timepicker></div><div class=\"col-sm-8 col-xs-12\"><div class=btn-group style=\"margin-top: 34px\"><a class=\"btn-default btn\" ng-click=setTimeNow()>Now</a> <a class=\"btn-default btn\" ng-click=setTimeMidnight()>Midnight</a></div></div></div></div></div><div class=modal-footer><button class=\"btn btn-success\" ng-disabled=!dateValid ng-click=chooseDatetime()><i class=\"glyphicon glyphicon-ok\"></i> Done</button> <button class=\"btn btn-danger\" ng-click=$dismiss();><i class=\"glyphicon glyphicon-remove\"></i> Cancel</button></div>"
  );


  $templateCache.put('/views/modals/description-modal.html',
    "<div class=modal-header><button type=button class=close ng-click=$dismiss(); aria-hidden=true>&times;</button><h4 class=modal-title>Edit Article Description</h4></div><div class=\"modal-body description-modal-body\"><div class=form-group><p class=help-block>Edit this article's description. Must be 200 characters or less.</p><textarea class=form-control ng-model=article.description maxlength=200></textarea><span class=\"pull-right text-success bg-success\" ng-class=\"{ 'text-success bg-success': article.description.length < 200, 'text-danger bg-danger': article.description.length >= 200 }\"><span ng-show=\"article.description.length >= 200;\">Max characters reached!</span> <span>{{ article.description.length || 0 }}/200</span></span></div></div><div class=modal-footer><button class=\"btn btn-success\" ng-click=$dismiss(); aria-hidden=true>Done</button></div>"
  );


  $templateCache.put('/views/modals/last-modified-guard-modal.html',
    "<div class=modal-header><button type=button class=close ng-click=$dismiss(); aria-hidden=true>&times;</button><h4 class=modal-title>Whoops!</h4></div><div class=\"modal-body last-modified-preview\"><h5>Looks like {{lastSavedBy|user}} is also editing this document. Would you like to overwrite {{lastSavedBy|user}}'s changes?</h5><div class=well style=text-align:center><button class=\"btn btn-warning\" aria-hidden=true ng-click=loadFromServer();>Use their version</button> <button class=\"btn btn-danger\" aria-hidden=true ng-click=saveAnyway();>Use my version</button> <button class=\"btn btn-default\" aria-hidden=true ng-click=$dismiss();>Cancel</button></div><h5>Here's {{lastSavedBy|user}}'s version:</h5><div class=\"body-preview well\" ng-bind-html=articleOnServer.body></div></div><div class=modal-footer><button class=\"btn btn-default\" aria-hidden=true ng-click=$dismiss();>Cancel</button></div>"
  );


  $templateCache.put('/views/modals/login-modal.html',
    "<div class=modal-header><button type=button class=close ng-click=$dismiss(); aria-hidden=true>&times;</button><h4 class=modal-title>Login</h4></div><div class=modal-body><h5>Your session expired. Please re-enter your username and password and try again.</h5><div class=login-fields><div><label>Username <input name=username class=form-control></label></div><div><label>Password <input name=password type=password class=form-control></label></div></div></div><div class=modal-footer><button class=\"btn btn-default\" aria-hidden=true ng-click=login();>Login</button></div>"
  );


  $templateCache.put('/views/modals/publish-date-modal.html',
    "<div class=modal-header><button type=button class=close ng-click=$dismiss(); aria-hidden=true>&times;</button><h4 class=modal-title>Choose publish date &amp; time</h4></div><div class=modal-body><div class=well><div class=\"date-dropdown dropdown\"><label>Date</label><div class=input-group><input readonly class=\"form-control disabled uneditable-input\" value=\"{{datePickerValue|tzDate:'MM/dd/yyyy'}}\"><div class=input-group-btn><a class=\"btn-default btn\" ng-click=\"setDateShortcut('today');\">Today</a> <a class=\"btn-default btn\" ng-click=\"setDateShortcut('tomorrow');\">Tomorrow</a> <a class=\"btn btn-default dropdown-toggle\" data-toggle=dropdown><i class=\"glyphicon glyphicon-calendar\"></i></a><ul class=\"dropdown-menu pull-right\" role=menu aria-labelledby=dLabel><datetimepicker data-ng-model=datePickerValue data-datetimepicker-config=\"{ dropdownSelector: '#dateDropdown', minView: 'day' }\"></ul></div></div></div></div><div class=well><label>Time ({{TIMEZONE_LABEL}})</label><div class=row><div class=\"col-sm-4 col-xs-12\"><timepicker minute-step=5 ng-model=timePickerValue mousewheel=false></timepicker></div><div class=\"col-sm-8 col-xs-12\"><div class=btn-group style=\"margin-top: 34px\"><a class=\"btn-default btn\" ng-click=\"setTimeShortcut('now');\">Now</a> <a class=\"btn-default btn\" ng-click=\"setTimeShortcut('midnight');\">Midnight</a></div></div></div></div></div><div class=modal-footer><save-button-old class=pull-left color-styling=btn-warning ng-show=article.published get-promise=unpublish() on-save=unpublishCbk(promise) confirm-click-with=\"Are you sure you want to unpublish this article?\" config=unpubButton></save-button-old><button class=\"btn btn-link\" ng-click=$dismiss();>Cancel</button><save-button-old color-styling=btn-primary get-promise=setPubTime() on-save=setPubTimeCbk(promise) config=pubButton></save-button-old></div>"
  );


  $templateCache.put('/views/modals/pubtime-validation-modal.html',
    "<div class=modal-header><button type=button class=close ng-click=$dismiss(); aria-hidden=true>&times;</button><h4 class=modal-title>Feature Type Required</h4></div><div class=modal-body><h5>You have to set a feature type before publishing an article.</h5></div><div class=modal-footer><button class=\"btn btn-default\" ng-click=$dismiss();>Sorry</button></div>"
  );


  $templateCache.put('/views/modals/sponsor-modal.html',
    "<div class=modal-header><button type=button class=close ng-click=$dismiss(); aria-hidden=true>&times;</button><h4 class=modal-title>Sponsor</h4></div><div class=modal-body><div class=\"form-group col-md-5\"><label for=specialCoverageCampaign>Sponsor Campaign</label><autocomplete-basic class=form-control ng-if=\"!model.campaign || model.campaign.$resolved\" ng-model=campaign item-display-formatter=\"item.sponsorName + ' - ' + item.campaignLabel\" on-select=updateArticle(selection) input-id=specialCoverageCampaign input-placeholder=\"e.g. 0-1337 Honda\" search-function=searchCampaigns></autocomplete-basic></div></div><div class=modal-footer><button class=\"btn btn-default\" aria-hidden=true ng-click=$dismiss();>Close</button></div>"
  );


  $templateCache.put('/views/modals/sponsored-content-modal.html',
    "<div class=modal-header><button type=button class=close ng-click=$dismiss(); aria-hidden=true>&times;</button><h4 class=modal-title>Sponsored Content</h4></div><div class=\"modal-body edit-page\"><div class=\"sponsor-info extra-info-section\"><label>Sponsor Info</label><div class=\"sponsor-info-field content-field\"><label>Sponsor Name</label><input ng-model=\"article.sponsor_name\"></div><div class=\"sponsor-info-field content-field\"><label>Sponsor Image</label></div><div class=main-image><bettyeditable image=article.sponsor_image ratio=16x9 placeholder-text=\"Sponsor Image\" add-styles=\"fa fa-picture-o add-feature-image\"></div><div class=\"sponsor-info-field content-field\"><label>Pixel</label><input ng-model=\"article.client_pixel\"></div></div></div><div class=modal-footer><button class=\"btn btn-default\" ng-click=$dismiss(); aria-hidden=true>Done</button></div>"
  );


  $templateCache.put('/views/modals/temporary-url-modal.html',
    "<div class=modal-header><button type=button class=close ng-click=$dismiss() aria-hidden=true>&times;</button><h4 class=modal-title>Temporary URL Generator</h4></div><div class=\"temporary-url-modal-body modal-body\"><p>Using the following form to generate a temporary URL that can be accessed by anyone with the link. Links generated here will remain valid only for {{ TEMP_LINK_DAYS_VALID }} days.</p><div class=\"new-temp-url input-group\"><span class=input-group-btn><button class=\"btn btn-primary\" ng-click=createToken()><i class=\"glyphicon glyphicon-share\"></i></button></span> <input class=form-control placeholder=\"Your URL will show up here\" value=\"{{ newestToken.url_uuid ? TEMP_URL_BASE + newestToken.url_uuid : '' }}\" readonly> <span class=input-group-btn><button class=\"btn btn-success\" clip-copy=\"TEMP_URL_BASE + newestToken.url_uuid\" ng-disabled=!newestToken><i class=\"glyphicon glyphicon-paperclip\"></i></button></span></div><div ng-show=\"tokens.length > 0\" class=table-responsive><p>Or use one of the following URLs already generated:</p><div class=temp-token-list><table class=table><thead><tr><td>URL</td><td>Days</td><td>Copy</td></tr></thead><tbody><tr ng-repeat=\"token in tokens\"><td>{{ TEMP_URL_BASE + token.url_uuid }}</td><td>{{ token.daysTillExpire }}</td><td><button class=\"btn btn-success btn-xs\" clip-copy=\"TEMP_URL_BASE + token.url_uuid\"><i class=\"glyphicon glyphicon-paperclip\"></i></button></td></tr></tbody></table></div></div></div><div class=modal-footer><button class=\"btn btn-default btn-danger\" ng-click=$dismiss()><i class=\"glyphicon glyphicon-remove\"></i> Close</button></div>"
  );


  $templateCache.put('/views/modals/thumbnail-modal.html',
    "<div class=modal-header><button type=button class=close ng-click=$dismiss(); aria-hidden=true>&times;</button><h4 class=modal-title>Change Thumbnail</h4></div><div class=\"modal-body edit-page\"><div class=\"main-image thumbnail-image extra-info-section\"><label>Thumbnail Image</label><div><p ng-show=\"!article.thumbnail_override || article.thumbnail_override.id === null\"><span ng-show=\"article.first_image && article.first_image !== null\">You are currently viewing the default thumbnail based off the article's image. Choose new thumbnail image if you'd like to show a custom thumbnail:</span> <span ng-show=\"!article.first_image || article.first_image === null\">There is currently no main image or thumbnail set. Choose a new thumbnail if you'd like to show a custom thumbnail.</span> <button class=\"btn btn-xs btn-primary\" ng-click=selectCustomThumbnail();><i class=\"glyphicon glyphicon-picture\"></i> Choose Thumbnail</button></p><div class=thumbnail-modal-image ng-show=\"article.thumbnail_override && article.thumbnail_override.id !== null\"><bettyeditable image=article.thumbnail_override editable=true ratio=16x9 placeholder-text=\"Thumbnail Image\" add-styles=\"fa fa-picture-o\"></bettyeditable></div><div class=thumbnail-modal-image ng-show=\"(!article.thumbnail_override || article.thumbnail_override.id === null) && article.first_image && article.first_image.id\"><bettyeditable image=article.first_image editable=false ratio=16x9 placeholder-text=\"Thumbnail Image\" add-styles=\"fa fa-picture-o\"></bettyeditable></div></div></div></div><div class=modal-footer><button class=\"btn btn-success\" ng-click=$dismiss();><i class=\"glyphicon glyphicon-ok\"></i> Done</button></div>"
  );


  $templateCache.put('/views/modals/version-browser-modal.html',
    "<div class=modal-header><button type=button class=close ng-click=$dismiss(); aria-hidden=true>&times;</button><h4 class=modal-title>Version Browser</h4></div><div class=modal-body><div ng-show=\"versions.length > 0\"><p class=text-info><span ng-show=\"maxVersions && versions.length == maxVersions\"><i class=\"glyphicon glyphicon-info-sign\"></i> A maximum of {{ maxVersions }} versions can be stored by the system. The oldest revisions will be deleted as new revisions are created.</span> <span ng-show=!maxVersions><i class=\"glyphicon glyphicon-info-sign\"></i> Versions are being stored locally by your browser. If you run out of space, versions created before yesterday will be deleted from your local cache.</span></p><div class=version-browser-container><div class=version-browser-left><div class=version-browser-header>Versions</div><ul class=\"version-timestamp-list nav nav-pills nav-stacked\"><li ng-repeat=\"version in versions\" ng-click=setPreview(version) ng-class=\"{active: selectedVersion === version}\"><a href=\"\"><span class=version-timestamp>{{ version.timestamp_display }}</span><br><span class=version-by ng-show=version.user.displayName>{{ version.user.displayName }}</span></a></li></ul></div><div class=version-browser-right><div class=version-browser-header>Preview</div><div class=version-preview ng-bind-html=selectedVersion.content.body></div></div></div></div><div ng-show=\"versions.length < 1\">No versions yet, save your article to create the first version!</div></div><div class=modal-footer><span ng-show=articleIsDirty class=\"text-danger version-browser-dirty-warning\"><i class=\"glyphicon glyphicon-warning-sign\"></i> You have unsaved changes that will be overwritten by restoring an old version!</span> <button ng-show=selectedVersion class=btn ng-class=\"{'btn-danger': articleIsDirty, 'btn-success': !articleIsDirty}\" aria-hidden=true ng-click=restoreSelected();><i class=glyphicon ng-class=\"{'glyphicon-warning-sign': articleIsDirty, 'glyphicon-open': !articleIsDirty}\"></i> Restore Selected Version</button> <button class=\"btn btn-default\" aria-hidden=true ng-click=$dismiss();><i class=\"glyphicon glyphicon-remove\"></i> Cancel</button></div>"
  );


  $templateCache.put('/views/modals/video-thumbnail-modal.html',
    "<div class=modal-header><button type=button class=close ng-click=$dismiss(); aria-hidden=true>&times;</button><h4 class=modal-title>Edit Video Poster</h4></div><div class=modal-body><div class=text-center><h1 class=h6><a href=\"\" ng-click=\"mode = 'still'\">Choose a still from the video</a> | <a href=\"\" ng-click=\"mode = 'upload'\">Upload an image</a></h1><div ng-show=\"mode == 'still'\"><div ng-show=inProgress><p>Video encoding in progress. Video stills are not available until the video is encoded.</p></div><div ng-hide=inProgress><img ng-show=\"currentThumbnail !== false\" class=poster-preview width=320 height=180 ng-src={{video.poster}}><div class=poster-buttons style=margin-top:10px><button ng-show=\"currentThumbnail !== false\" type=button class=\"prev-thumb btn btn-primary btn-xs\" ng-click=prevThumb();><i class=\"fa fa-caret-left\"></i></button> <button ng-show=\"currentThumbnail !== false\" type=button class=\"next-thumb btn btn-primary btn-xs\" ng-click=nextThumb();><i class=\"fa fa-caret-right\"></i></button> <button ng-show=\"currentThumbnail === false\" type=button class=\"btn btn-primary btn-xs\" ng-click=defaultThumb();>Default</button></div></div></div></div><div class=text-center><div ng-show=\"mode == 'upload'\"><bettyeditable image=uploadedImage ratio=16x9 placeholder-text=\"Upload Image\" add-styles=\"fa fa-picture-o\" edit-ratios=\"['16x9']\"></bettyeditable></div></div><div style=\"margin-top:10px; margin-bottom: 10px\"><label>Poster Image URL</label><input name=poster_url class=\"text-input smooth-border smooth-bg\" style=\"width: 80%\" ng-model=video.poster></div></div><div class=modal-footer><button class=\"btn btn-warning pull-left\" aria-hidden=true ng-click=reencode();>Re-encode</button> <button class=\"btn btn-default\" aria-hidden=true ng-click=$dismiss();>Cancel</button> <button class=\"btn btn-success\" aria-hidden=true ng-click=setPoster();>Set Poster</button></div>"
  );


  $templateCache.put('/views/nav.html',
    "<nav class=\"navbar navbar-default navbar-fixed-top\" role=navigation><div class=container-fluid><div class=navbar-header><button type=button class=navbar-toggle data-toggle=collapse data-target=#navbar-collapse><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a id=logo class=navbar-brand href=\"#/cms/app/list/\"><img ng-src=\"{{ NAV_LOGO }}\"></a></div><div class=\"collapse navbar-collapse\" id=navbar-collapse><ul class=\"nav navbar-nav\"><active-nav href=\"#/cms/app/list/\" label=Content></active-nav><active-nav href=\"#/cms/app/promotion/\" label=Promotion hide-if-forbidden options-url=\"/cms/api/v1/pzone/\"></active-nav><active-nav href=\"#/cms/app/reporting/\" label=Reporting></active-nav><active-nav href=\"#/cms/app/notifications/\" label=Notifications></active-nav><active-nav href=\"#/cms/app/campaigns/\" label=Campaigns></active-nav><active-nav href=\"#/cms/app/special-coverage/\" label=\"Special Coverage\"></active-nav><active-nav href=\"#/cms/app/section/\" label=Sections></active-nav></ul><ul class=\"nav navbar-nav navbar-right\"><logged-in-user></logged-in-user></ul></div></div></nav>"
  );


  $templateCache.put('/views/pzones.html',
    "<nav-bar view=nav></nav-bar><div class=container><div class=pzone-container id=pzone-content><div class=\"panel panel-default\"><div class=panel-heading><h4>Promotion Zone Editor</h4></div><div class=panel-body><div class=\"col-xs-3 form-group\"><div class=form-group><label for=select-pzone>Select zone to edit</label><select name=pzone tabindex=1 id=select-pzone ng-model=pzoneName class=form-control><option value=homepage-two>Homepage Two</option><option value=homepage-three>Homepage Three</option></select></div><div class=form-group><label for=select-zone-type>Select zone type</label><select name=pzone id=select-zone-type disabled ng-model=pzone.zone_type class=\"form-control disabled\" ng-change=typeChanged()><option value=list>Content</option></select></div><div class=form-group><button type=submit class=\"pull-right btn btn-success\" id=save-pzone-btn ng-click=save()>Save</button></div></div><div class=\"col-xs-9 form-group\" ng-if=pzone><div class=form-group><label for=edit-zone-title>Edit zone title HTML</label><input id=edit-zone-title ng-model=pzone.data.title placeholder=\"<a href=&quot;#&quot;>Zone Title</a>\" class=\"form-control\"></div><div ng-include=getPZoneTemplate() class=form-group></div></div></div></div></div></div>"
  );


  $templateCache.put('/views/pzones/carousel.html',
    "<div class=row><span>Looks like this P'Zone is outdated</span></div>"
  );


  $templateCache.put('/views/pzones/feature_type.html',
    "<div class=row><span>Coming soon!</span></div>"
  );


  $templateCache.put('/views/pzones/list.html',
    "<table class=\"table-condensed table table-striped\"><tr class=row><th>Content ID</th><th>Actions</th></tr><tr class=row><td><input class=form-control ng-model=$parent.$parent.newContentIdPrepend placeholder=\"Content ID\"></td><td><button type=submit class=\"btn btn-default\" ng-click=add(true);>Add</button></td></tr><tr class=row ng-repeat=\"contentId in pzone.data.content_ids track by $index\"><td><input class=form-control ng-model=\"pzone.data.content_ids[$index]\"></td><td><button type=button class=\"close btn btn-link pull-left\" ng-click=remove(contentId) aria-hidden=true>&times;</button></td></tr><tr class=row><td><input class=form-control ng-model=$parent.$parent.newContentId placeholder=\"Content ID\"></td><td><button type=submit class=\"btn btn-default\" ng-click=add()>Add</button></td></tr></table>"
  );


  $templateCache.put('/views/pzones/oneup.html',
    "<div class=row><span>Looks like this P'Zone is outdated</span></div>"
  );


  $templateCache.put('/views/pzones/reviews.html',
    "<div class=row><p class=col-xs-12>The \"reviews\" promoted zone has no available options.</p></div>"
  );


  $templateCache.put('/views/pzones/twoup.html',
    "<div class=row><span>Looks like this P'Zone is outdated</span></div>"
  );


  $templateCache.put('/views/reporting.html',
    "<nav-bar view=nav></nav-bar><div class=\"wrapper container-fluid\"><div class=row><div class=col-md-2><select class=form-control ng-options=\"options as name for (name, options) in reports\" ng-model=report></select></div><div class=col-md-2><p class=input-group><input placeholder=\"Start Date\" class=form-control datepicker-popup=yyyy-MM-dd ng-model=start is-open=startOpen close-text=\"Close\"> <span class=input-group-btn><button type=button class=\"btn btn-default\" ng-click=openStart($event)><i class=\"glyphicon glyphicon-calendar\"></i></button></span></p></div><div class=col-md-2><p class=input-group><input placeholder=\"End Date\" class=form-control datepicker-popup=yyyy-MM-dd ng-model=end is-open=endOpen close-text=\"Close\"> <span class=input-group-btn><button type=button class=\"btn btn-default\" ng-click=openEnd($event)><i class=\"glyphicon glyphicon-calendar\"></i></button></span></p></div><div class=col-md-2 ng-show=\"orderOptions.length > 0\"><select class=form-control ng-options=\"option as option.label for option in orderOptions\" ng-model=orderBy ng-change=orderingChange()></select></div><div class=col-md-2><a href=\"{{ downloadURL }}\" target=_blank class=\"btn btn-primary\">Download</a></div></div><table class=\"table table-striped\"><thead><tr><th ng-repeat=\"heading in headings\" ng-bind=heading></th></tr></thead><tbody><tr ng-repeat=\"item in items\"><td ng-repeat=\"value in item\" ng-bind=value></td></tr></tbody></table></div>"
  );


  $templateCache.put('/views/save-button.html',
    "<button class=btn ng-click=save(); ng-class=colors ng-bind-html=config.idle></button>"
  );


  $templateCache.put('/views/static-image.html',
    "<div ng-if=imageUrl style=\"position: relative\"><img class=image style=\"width: 100%\" ng-src=\"{{imageUrl}}\"></div><span ng-if=!imageUrl class=\"no-image text-large\"><i class=\"fa-exclamation-triangle fa\"></i><span>No image selected.</span></span>"
  );


  $templateCache.put('/views/taglike-autocomplete-field.html',
    "<div class=\"input-list {{name}} bulbs-autocomplete col-sm-8\"><h1 class=\"h6 col-xs-12 {{name}}\"><label for={{name}}-input class=control-label>{{label}}</label></h1><div class=\"col-sm-4 form-group\"><input id={{name}}-input name={{name}} class=\"new-tag-input form-control input-sm\" placeholder=\"{{placeholder}}\"></div><div class=col-sm-8><ul class=list-inline><li class=\"label {{name}} tag taglikeobject\" ng-repeat=\"object in objects\" ng-class=\"{newtag: object.new}\"><span class={{name}}-span>{{display(object)}}</span> <a href=\"\" class=remove ng-click=delete($event); data-taglikeobject={{object}}><span class=\"glyphicon glyphicon-remove\"></span></a></li></ul></div></div>"
  );


  $templateCache.put('/views/targeting-editor.html',
    "<nav-bar view=nav></nav-bar><div class=container><div class=\"panel panel-default\" id=targeting><div class=panel-heading><h4>Targeting Editor</h4></div><div class=\"panel-body input-group\"><input class=form-control ng-keyup=\"keyHandler($event, url)\" ng-model=url placeholder=\"URL to edit targeting for\" tabindex=\"1\"><div class=input-group-btn><a class=\"btn btn-primary search-button\" ng-click=search(url);><span class=\"fa fa-search\"></span></a></div></div><targeting targeting-array=targetingArray></targeting></div></div>"
  );


  $templateCache.put('/views/targeting.html',
    "<div><div class=\"panel-body targeting-table\"><table class=\"table targeting-group\"><tr><th>Key</th><th>Value</th><th class=invisible>Actions</th></tr><tr class=\"table-striped targeting-row\" ng-repeat=\"t in targetingArray\"><td><input name=key placeholder=Key class=form-control ng-model=targetingArray[$index][0]></td><td><input name=value placeholder=Value class=form-control ng-model=targetingArray[$index][1]></td><td><button class=\"btn btn-danger pull-right\" type=submit ng-click=removeTargetingRow($index);><i class=\"glyphicon glyphicon-remove\"></i></button></td></tr></table></div><div class=\"panel-footer text-right\"><button class=\"btn btn-primary add-targeting-button\" type=submit ng-click=addTargetingRow($index);><i class=\"glyphicon glyphicon-plus\"></i> Add Row</button><save-button-old class=add-targeting-button get-promise=save() color-styling=btn-success></save-button-old></div></div>"
  );


  $templateCache.put('/views/textlike-autocomplete-field.html',
    "<div class=bulbs-autocomplete><h1 class=\"h6 col-xs-12 section\"><label class=control-label for={{name}}-input>{{label}}</label></h1><div class=\"tag taglikeobject col-sm-12 {{name}}-display\" id={{name}}-container ng-show=model><span class=tagname>{{model}}</span> <a class=remove ng-click=delete($event);><span class=\"glyphicon glyphicon-remove\"></span></a></div><div class=\"col-sm-12 {{name}}-input\"><input class=\"form-control input-sm new-tag-input\" id={{name}}-input name={{name}} placeholder={{placeholder}} ng-hide=\"model\"></div></div>"
  );


  $templateCache.put('/views/toolbar.html',
    "<nav class=\"navbar navbar-default navbar-fixed-top\" role=navigation><div class=container-fluid><div class=navbar-header><a id=logo class=navbar-brand href=#/cms/app/list><img ng-src=\"{{ NAV_LOGO }}\"></a> <button type=button class=\"navbar-toggle pull-right\" data-toggle=collapse data-target=#navbar-collapse><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=\"navbar-save btn btn-success navbar-btn visible-xs-inline pull-right\" ng-class=\"{'btn-clean': !articleIsDirty}\" href=\"\" ng-click=saveArticle(); hide-if-forbidden options-url=\"/cms/api/v1/content/{{article.id}}/\"><i class=\"glyphicon glyphicon-floppy-disk\"></i> Save</a></div><div class=\"collapse navbar-collapse\" id=navbar-collapse><ul class=\"nav navbar-nav edit-page-nav container-fluid\"><li class=dropdown><a href=# class=dropdown-toggle data-toggle=dropdown>Article Tools <b class=caret></b></a><ul class=dropdown-menu><li><a href=\"\" role=button class=changelog-button ng-controller=ContentworkflowCtrl ng-click=changelogModal(article);><i class=\"glyphicon glyphicon-cog\"></i> View Changelog</a></li><li><a href=\"\" role=button class=version-browser-button ng-controller=ContentworkflowCtrl ng-click=versionBrowserModal(article);><i class=\"glyphicon glyphicon-th-list\"></i> Browse Versions</a></li><li><a href=\"\" role=button ng-controller=ContentworkflowCtrl ng-click=thumbnailModal(article);><i class=\"glyphicon glyphicon-picture\"></i> Edit Thumbnail</a></li><li><a href=\"\" role=button ng-controller=ContentworkflowCtrl ng-click=sponsorModal(article);><i class=\"glyphicon glyphicon-briefcase\"></i> Edit Sponsor</a></li><li><a href=\"\" role=button ng-controller=ContentworkflowCtrl ng-click=descriptionModal(article)><i class=\"glyphicon glyphicon-edit\"></i> Edit Description</a></li><li><a href=\"\" role=button ng-controller=ContentworkflowCtrl ng-click=temporaryUrlModal(article)><i class=\"glyphicon glyphicon-link\"></i> Temporary Link</a></li><li role=presentation class=divider></li><li><a href=\"\" ng-controller=ContentworkflowCtrl role=button ng-click=trashContentModal(article.id);><i class=\"glyphicon glyphicon-trash\"></i> Delete Article</a></li></ul></li><li ng-class=\"{active: page === 'edit'}\"><a href=\"#/cms/app/edit/{{article.id}}/\" role=button>Edit Content</a></li><li ng-class=\"{active: page === 'contributions'}\"><a href=\"#/cms/app/edit/{{article.id}}/contributions/\" role=button>Edit Contributions</a></li></ul><ul class=\"nav navbar-nav navbar-right\" ng-show=\"page === 'contributions'\"><li><button id=save-btn class=\"navbar-save btn btn-success btn-sm navbar-btn\" ng-class=\"{'btn-clean': clean}\" href=\"\" ng-click=save();><i class=\"glyphicon glyphicon-floppy-disk\"></i> <span>Save</span></button></li></ul><ul class=\"nav navbar-nav navbar-right\" ng-show=\"page === 'edit'\"><li class=content-status ng-controller=ContentworkflowCtrl ng-show=\"firebaseConnected && activeUsers.length > 0\" ng-init=\"showActiveUsers = false;\"><a href=\"\" ng-mouseenter=\"showActiveUsers = true;\" ng-mouseleave=\"showActiveUsers = false;\"><i class=\"glyphicon glyphicon-eye-open\"></i> <span>Active Users ({{ activeUsers.length }})</span></a><div class=active-users ng-show=showActiveUsers><ul><li ng-repeat=\"user in activeUsers\"><span>{{ user.displayName }}</span><span ng-show=\"user.count > 1\">({{ user.count }})</span></li></ul></div></li><li class=content-status ng-controller=ContentworkflowCtrl ng-show=\"getStatus(article) == 'unpublished'\" hide-if-forbidden options-url=\"/cms/api/v1/content/{{article.id}}/publish/\"><a href=\"\" ng-click=saveArticle().then(pubTimeModal);><i class=\"glyphicon glyphicon-globe\"></i> Publish...</a></li><li class=content-status ng-controller=ContentworkflowCtrl ng-show=\"getStatus(article) == 'published'\" hide-if-forbidden options-url=\"/cms/api/v1/content/{{article.id}}/publish/\"><a href=\"\" class=changeable ng-click=saveArticle().then(pubTimeModal);><i class=\"glyphicon glyphicon-calendar\"></i> <span>Published: {{article.published|tzDate:\"M/d/yy '@' h:mm a\" }}</span></a></li><li class=content-status ng-controller=ContentworkflowCtrl ng-show=\"getStatus(article) == 'scheduled'\" hide-if-forbidden options-url=\"/cms/api/v1/content/{{article.id}}/publish/\"><a href=\"\" class=changeable ng-click=saveArticle().then(pubTimeModal);><i class=\"glyphicon glyphicon-calendar\"></i> <span>Scheduled: {{article.published|tzDate:\"M/d/yy '@' h:mm a\" }}</span></a></li><li class=content-status><a target=_blank href=/r/{{article.id}}><i class=\"glyphicon glyphicon-share-alt\"></i> <span>Preview</span></a></li><li class=hidden-xs hide-if-forbidden options-url=\"/cms/api/v1/content/{{article.id}}/\"><button id=save-article-btn class=\"navbar-save btn btn-success btn-sm navbar-btn\" ng-class=\"{'btn-clean': !articleIsDirty}\" href=\"\" ng-click=saveArticle();><i class=\"glyphicon glyphicon-floppy-disk\"></i> <span>Save</span></button></li></ul></div></div></nav>"
  );


  $templateCache.put('/views/video-field.html',
    "<div ng-if=article.video class=video-embed-container style=\"position: relative\"><video-embed video-id={{article.video}}></video-embed><div style=\"position: absolute; top: 2%; right: 1%\"><button ng-click=thumbnailModal(); class=\"btn btn-info\"><span class=\"fa fa-picture-o\"></span></button> <button ng-click=removeVideo(); class=\"btn btn-danger\"><span class=\"fa fa-trash-o\"></span></button></div></div><div ng-if=\"!article.video && !uploadProgress\" class=video-upload-container style=\"position: relative\"><button ng-click=uploadVideo(); class=\"btn btn-success\" style=\"width: 100%\"><span class=\"fa fa-film\"></span> Upload Video</button></div><div ng-if=\"!article.video && uploadProgress\"><div class=progress><div class=progress-bar role=progressbar aria-valuenow=60 aria-valuemin=0 aria-valuemax=100 style=\"width: {{uploadProgress}}%\"><span class=sr-only>60% Complete</span></div></div></div>"
  );


  $templateCache.put('/content_type_views/content_content.html',
    "<section><div class=\"metadata container-fluid\"><div class=row><featuretype-field article=article class=pull-left></featuretype-field><sections-field article=article class=pull-left></sections-field></div><div class=row><tags-field article=article></tags-field></div><div class=row><template-type-field content=article class=form-group-sm><template-type-field></template-type-field></template-type-field></div></div></section><section class=\"main-image row\"><div class=\"clearfix well\"><bettyeditable image=article.image ratio=16x9 placeholder-text=\"Optional Main Image\" add-styles=\"fa fa-picture-o add-feature-image\"></div></section><section><onion-editor id=content-title ng-model=article.title role=singleline formatting=italic placeholder=Title></onion-editor><onion-editor id=content-subhead ng-model=article.subhead role=singleline formatting=\"\" placeholder=Subhead></onion-editor></section><section><div class=\"well clearfix\"><authors-field article=article></authors-field></div></section><onion-editor id=content-body ng-model=article.body role=multiline placeholder=\"Write here\" inline-objects=/views/inline-objects.json link-domain=theonion.com link-search-handler=\"dummySearchHandler\">"
  );


  $templateCache.put('/content_type_views/video.html',
    "<section><div class=\"metadata container-fluid\"><div class=row><featuretype-field article=article class=pull-left></featuretype-field><sections-field article=article class=pull-left></sections-field></div><div class=row><tags-field article=article></tags-field></div></div></section><section class=\"main-image row\"><div class=\"clearfix well\"><video-field article=article></video-field></div></section><section><onion-editor id=content-title ng-model=article.title role=singleline></onion-editor><onion-editor id=content-subhead ng-model=article.subhead role=singleline></onion-editor></section><section><div class=\"well clearfix\"><authors-field article=article></authors-field></div></section><onion-editor id=content-body ng-model=article.body role=multiline placeholder=\"Write here\" inline-objects=/views/inline-objects.json link-domain=theonion.com link-search-handler=\"dummySearchHandler\">"
  );


  $templateCache.put('/components/autocomplete-basic/autocomplete-basic.html',
    "<div ng-if=currentSelection class=selection-overlay><span class=selection-value>{{ itemDisplayFormatter({item: currentSelection}) }}</span> <button class=\"no-style pull-right\" ng-click=clearSelectionOverlay()><i class=\"glyphicon glyphicon-remove\"></i></button></div><div ng-if=!currentSelection class=input-container><label><i class=\"glyphicon glyphicon-search\" ng-if=!hideSearchIcon()></i> <input id=\"{{ inputId }}\" placeholder=\"{{ inputPlaceholder }}\" ng-model=writables.searchTerm ng-blur=delayClearAutocomplete() ng-change=updateAutocomplete() ng-keydown=handleKeypress($event)></label><bulbs-autocomplete-suggest ng-show=\"writables.searchTerm && autocompleteItems.length > 0\" formatter=item.name items=autocompleteItems on-select=handleSelect(selection)></bulbs-autocomplete-suggest><div ng-show=\"writables.searchTerm && autocompleteItems.length === 0\" class=no-results>No results found</div></div>"
  );


  $templateCache.put('/components/campaigns/campaigns-edit/campaigns-edit-sponsor-pixel/campaigns-edit-sponsor-pixel.html',
    "<div class=\"form-group col-md-8\"><input ng-model=model.url class=form-control></div><div class=\"form-group col-md-3\"><select class=form-control type=text ng-options=\"pixelType.value as pixelType.name for pixelType in PIXEL_TYPES\" ng-model=model.pixel_type><option value=\"\">Choose Type</option></select></div>"
  );


  $templateCache.put('/components/campaigns/campaigns-edit/campaigns-edit.html',
    "<top-bar logo-href=\"#/cms/app/campaigns/\" save-function=saveModel save-disable-when=\"model.$dirty().length === 0 && !isNew\"></top-bar><div id=campaigns-edit><div class=\"container col-xs-offset-2 col-xs-8\"><h3><a href=\"#/cms/app/campaigns/\">Campaigns</a> &gt; <span ng-if=\"isNew && !model.campaignLabel\">New Campaign</span> <span ng-if=\"!isNew || model.campaignLabel\">{{ model.campaignLabel }}</span></h3><div class=\"row well\"><div class=row><div class=\"form-group col-md-6\"><label for=campaignSponsorName>Sponsor Name (Appears On Website)</label><input id=campaignSponsorName ng-model=model.sponsorName class=form-control></div><div class=\"form-group col-md-6\"><label for=campaignStartDate>Campaign Start Date</label><div class=input-group><input id=campaignStartDate value=\"{{ model.startDate.format('MM/DD/YY h:mm:ss a') }}\" class=form-control readonly> <span class=input-group-btn><button class=\"btn btn-info\" datetime-selection-modal-opener ng-model=model.startDate modal-title=\"Campaign Start Date\"><i class=\"glyphicon glyphicon-calendar\"></i></button> <button class=\"btn btn-danger\" ng-click=\"model.startDate = null;\"><i class=\"glyphicon glyphicon-remove\"></i></button></span></div></div></div><div class=row><div class=\"form-group col-md-6\"><label for=campaignLabel>Campaign Label (Internal Use Only)</label><input id=campaignLabel ng-model=model.campaignLabel class=form-control placeholder=\"e.g. O-183794983\"></div><div class=\"form-group col-md-6\"><label for=campaignEndDate>Campaign End Date</label><div class=input-group><input id=campaignEndDate value=\"{{ model.endDate.format('MM/DD/YY h:mm:ss a') }}\" class=form-control readonly> <span class=input-group-btn><button class=\"btn btn-info\" datetime-selection-modal-opener ng-model=model.endDate modal-title=\"Campaign End Date\"><i class=\"glyphicon glyphicon-calendar\"></i></button> <button class=\"btn btn-danger\" ng-click=\"model.endDate = null;\"><i class=\"glyphicon glyphicon-remove\"></i></button></span></div></div></div><div class=row><div class=\"form-group col-md-6\"><label for=campaignSponsorUrl>Sponsor Click Through URL</label><input id=campaignSponsorUrl ng-model=model.sponsorUrl class=form-control></div><div class=\"form-group col-md-6\"><label for=impressionGoal>Set Impression Goal</label><input id=impressionGoal ng-model=model.impressionGoal class=form-control placeholder=\"e.g. 20,000,000\"></div></div><div class=row><div class=\"form-group col-md-6\"><label>Sponsor Logo (Optional)</label><bettyeditable image=model.sponsorLogo ratio=16x9 add-styles=\"fa fa-picture-o\"></bettyeditable></div></div></div><div class=\"row well\"><h5>Sponsor Pixels</h5><div class=\"row col-md-12\" ng-repeat=\"pixel in model.pixels\"><campaigns-edit-sponsor-pixel model=pixel class=pixel></campaigns-edit-sponsor-pixel><button class=\"btn btn-danger\" ng-click=deletePixel(pixel)><i class=\"glyphicon glyphicon-remove\"></i></button></div><div class=\"row col-md-12\"><button ng-click=addPixel() class=add-pixel><i class=\"glyphicon glyphicon-plus-sign\"></i> Add Another Pixel</button></div></div></div></div>"
  );


  $templateCache.put('/components/campaigns/campaigns-list/campaigns-list-page.html',
    "<nav-bar view=nav></nav-bar><div class=\"container col-xs-offset-1 col-xs-10\"><cms-notify-container class=cms-notify-container></cms-notify-container><list-page cms-page=campaigns model-factory=modelFactory></list-page></div>"
  );


  $templateCache.put('/components/confirmation-modal/confirmation-modal.html',
    "<div class=modal-header><button type=button class=close ng-click=cancel()>&times;</button><h4 class=modal-title>{{ modalTitle || 'Confirm' }}</h4></div><div class=modal-body>{{ modalBody || 'Are you sure?' }}</div><div class=modal-footer><button class=\"btn btn-success\" ng-click=confirm()><i class=\"glyphicon glyphicon-ok\"></i> {{ modalOkText || 'Done' }}</button> <button class=\"btn btn-danger\" ng-click=cancel()><i class=\"glyphicon glyphicon-remove\"></i> {{ modalCancelText || 'Cancel' }}</button></div>"
  );


  $templateCache.put('/components/custom-search/custom-search-content-item/custom-search-content-item.html',
    "<div class=\"item-wrapper row\" ng-class=\"{\r" +
    "\n" +
    "      'included': controllerService.includesHas(model.id),\r" +
    "\n" +
    "      'excluded': controllerService.excludesHas(model.id)\r" +
    "\n" +
    "    }\"><div class=\"wrapper-pin col-md-1\"><button class=\"btn-minimalized btn-pin-active\" ng-if=controllerService.pinsHas(model.id) ng-click=\"\r" +
    "\n" +
    "          controllerService.pinsRemove(model.id);\r" +
    "\n" +
    "          onUpdate()\"><i class=\"glyphicon glyphicon-pushpin\"></i></button> <button class=\"btn-minimalized btn-pin-inactive\" ng-if=!controllerService.pinsHas(model.id) ng-click=\"\r" +
    "\n" +
    "          controllerService.pinsAdd(model.id);\r" +
    "\n" +
    "          onUpdate()\"><i class=\"glyphicon glyphicon-pushpin\"></i></button></div><div class=\"wrapper-content col-md-9\"><div class=content-id>Article ID: {{ model.id }} | {{ model.feature_type }}</div><div class=content-title>{{ model.title }}</div></div><div class=\"wrapper-published col-md-2\"><div class=published-top>Published</div><div class=published-date>{{ model.published | date : 'M/d/yyyy, h:mm a' }}</div></div><div class=wrapper-remove><button class=\"btn btn-xs btn-danger\" ng-if=!controllerService.excludesHas(model.id) ng-click=\"\r" +
    "\n" +
    "          controllerService.excludesAdd(model.id);\r" +
    "\n" +
    "          onUpdate()\"><i class=\"glyphicon glyphicon-remove\"></i></button> <button class=\"btn btn-xs btn-success\" ng-if=controllerService.excludesHas(model.id) ng-click=\"\r" +
    "\n" +
    "          controllerService.excludesRemove(model.id);\r" +
    "\n" +
    "          onUpdate()\"><i class=\"glyphicon glyphicon-repeat\"></i></button></div></div>"
  );


  $templateCache.put('/components/custom-search/custom-search-group/custom-search-group-condition/custom-search-group-condition.html',
    "<div class=form-inline><div class=form-group><select class=\"form-control input-sm\" ng-model=data.field ng-options=\"field.endpoint as field.name for field in fieldTypes\" ng-change=\"\r" +
    "\n" +
    "          clearAutocomplete();\r" +
    "\n" +
    "          controllerService.groupsConditionsValuesClear(groupIndex, conditionIndex);\r" +
    "\n" +
    "          onUpdate()\"></select></div><div class=form-group><select class=\"form-control input-sm\" ng-model=data.type ng-options=\"condition.value as condition.name for condition in conditionTypes\" ng-change=\"\r" +
    "\n" +
    "          clearAutocomplete();\r" +
    "\n" +
    "          onUpdate()\"></select></div><div class=\"autocomplete-items form-group\"><span class=\"input-group input-group-sm\"><input class=form-control placeholder=\"Enter a search term...\" ng-model=writables.searchTerm ng-change=updateAutocomplete() ng-keydown=handleKeypress($event) ng-blur=delayClearAutocomplete()></span><bulbs-autocomplete-suggest ng-show=writables.searchTerm formatter=item.name items=autocompleteItems on-select=\"\r" +
    "\n" +
    "          controllerService.groupsConditionsValuesAdd(groupIndex, conditionIndex, selection);\r" +
    "\n" +
    "          writables.searchTerm = '';\r" +
    "\n" +
    "          onUpdate()\"></bulbs-autocomplete-suggest></div><div class=value ng-repeat=\"value in controllerService.groupsConditionsValuesList(groupIndex, conditionIndex)\"><span>{{ value.name }}</span> <button ng-click=\"controllerService.groupsConditionsValuesRemove(groupIndex, conditionIndex, $index); onUpdate()\"><i class=\"glyphicon glyphicon-remove\"></i></button></div><button class=\"condition-remove btn btn-xs btn-danger\" ng-click=remove()><i class=\"glyphicon glyphicon-remove\"></i></button></div>"
  );


  $templateCache.put('/components/custom-search/custom-search-group/custom-search-group.html',
    "<div class=\"panel panel-default\"><div class=panel-heading><span>Total Results from this Group: <strong>{{ controllerService.groupsResultCountGet(groupIndex) }}</strong></span> <button class=\"group-remove btn btn-danger btn-xs\" ng-click=remove()><i class=\"glyphicon glyphicon-remove\"></i></button></div><div class=panel-body><custom-search-group-condition ng-repeat=\"condition in controllerService.groupsConditionsList(groupIndex)\" remove=\"controllerService.groupsConditionsRemove(groupIndex, $index); $update()\" group-index=groupIndex condition-index=$index controller-service=controllerService on-update=$update()></custom-search-group-condition><div class=group-time-period ng-if=controllerService.groupsTimePeriodGet(groupIndex)><div class=form-inline><div class=\"form-group input-group-sm\"><label for=\"timePeriod-{{ uuid }}\">Time Period is from</label><select id=\"timePeriod-{{ uuid }}\" class=form-control ng-model=data.time ng-change=$update() ng-options=\"timePeriod.value as timePeriod.name for timePeriod in timePeriods\"></select></div></div><button class=\"group-time-period-remove btn btn-xs btn-danger\" ng-click=\"controllerService.groupsTimePeriodRemove(groupIndex); $update()\"><i class=\"glyphicon glyphicon-remove\"></i></button></div><button class=\"btn btn-xs btn-info\" ng-click=\"controllerService.groupsConditionsAdd(groupIndex); $update()\"><i class=\"glyphicon glyphicon-plus\"></i> Add a Condition</button> <button class=\"btn btn-xs btn-info\" ng-if=!controllerService.groupsTimePeriodGet(groupIndex) ng-click=\"controllerService.groupsTimePeriodSet(groupIndex); $update()\"><i class=\"glyphicon glyphicon-plus\"></i> Add Time Period</button></div></div>"
  );


  $templateCache.put('/components/custom-search/custom-search-simple-content-search/custom-search-simple-content-search.html',
    "<div class=muted-capitals>Manually Add Article to List</div><div class=search-container><div class=search-input><label for=customSearchContentSearch><i class=\"glyphicon glyphicon-search\"></i></label><input id=customSearchContentSearch placeholder=\"Search content by article ID or headline...\" ng-model=writables.searchTerm ng-blur=delayClearAutocomplete() ng-change=updateAutocomplete() ng-keydown=handleKeypress($event)></div><bulbs-autocomplete-suggest ng-show=\"writables.searchTerm && autocompleteItems.length > 0\" formatter=item.name items=autocompleteItems on-select=\"onSelect({id: selection.value}); autocompleteItems = []; writables.searchTerm = '';\"></bulbs-autocomplete-suggest></div>"
  );


  $templateCache.put('/components/custom-search/custom-search.html',
    "<div class=queries-section><div class=\"clear-search-queries-container clearfix\"><button ng-show=\"customSearchService.groupsList().length > 0\" class=\"btn btn-xs btn-danger pull-right\" ng-click=\"\r" +
    "\n" +
    "          resetFilters();\r" +
    "\n" +
    "          customSearchService.groupsClear();\r" +
    "\n" +
    "          $contentRetrieve()\"><i class=\"glyphicon glyphicon-remove\"></i> Clear All Search Parameters</button></div><custom-search-group ng-repeat=\"group in customSearchService.groupsList()\" remove=\"\r" +
    "\n" +
    "        customSearchService.groupsRemove($index);\r" +
    "\n" +
    "        resetFilters();\r" +
    "\n" +
    "        $contentRetrieve()\" group-index=$index controller-service=customSearchService on-update=\"\r" +
    "\n" +
    "        resetFilters();\r" +
    "\n" +
    "        $contentRetrieve();\"></custom-search-group><div class=clearfix><button class=\"btn btn-primary pull-right\" ng-click=\"\r" +
    "\n" +
    "          customSearchService.groupsAdd();\r" +
    "\n" +
    "          onUpdate();\"><i class=\"glyphicon glyphicon-plus\"></i> Add Another Query</button></div></div><custom-search-simple-content-search on-select=\"\r" +
    "\n" +
    "      resetFilters();\r" +
    "\n" +
    "      customSearchService.includesAdd(id);\r" +
    "\n" +
    "      $contentRetrieve()\"></custom-search-simple-content-search><hr><div class=content-list><div class=content-list-heading><span class=content-list-heading-title>Current List Based on Above Parameters</span> <span>Total Results in List: <span class=content-list-heading-count>{{ customSearchService.content.count }}</span></span></div><div class=\"content-list-filters row\"><div class=col-md-7><div class=search-input><span class=label-container><label for=contentFilterTerm><i class=\"glyphicon glyphicon-search\"></i></label></span> <span class=input-container><input id=contentFilterTerm ng-model=customSearchService.$query ng-change=\"\r" +
    "\n" +
    "                customSearchService.setPage(1);\r" +
    "\n" +
    "                $conditionalContentRetrieve()\" placeholder=\"Search the list by article ID or headline...\"></span> <span class=btn-container><button class=btn-minimalized ng-click=\"\r" +
    "\n" +
    "                customSearchService.setQuery('');\r" +
    "\n" +
    "                customSearchService.setPage(1);\r" +
    "\n" +
    "                $conditionalContentRetrieve()\"><i class=\"glyphicon glyphicon-remove\"></i></button></span></div></div><div class=\"search-filters col-md-5\"><button class=\"btn-filter btn-filter-green\" ng-class=\"{'active': addedFilterOn}\" ng-click=\"\r" +
    "\n" +
    "            addedFilterOn = !addedFilterOn;\r" +
    "\n" +
    "            removedFilterOn = false;\r" +
    "\n" +
    "            customSearchService.setPage(1);\r" +
    "\n" +
    "            customSearchService.setQuery('');\r" +
    "\n" +
    "            $conditionalContentRetrieve()\">Added Articles: <span class=btn-filter-count>{{ customSearchService.includesList().length }}</span> <span class=btn-filter-state><span ng-if=!addedFilterOn>Filter</span> <span ng-if=addedFilterOn>Clear</span></span></button> <button class=\"btn-filter btn-filter-red\" ng-class=\"{'active': removedFilterOn}\" ng-click=\"\r" +
    "\n" +
    "            addedFilterOn = false;\r" +
    "\n" +
    "            removedFilterOn = !removedFilterOn;\r" +
    "\n" +
    "            customSearchService.setPage(1);\r" +
    "\n" +
    "            customSearchService.setQuery('');\r" +
    "\n" +
    "            $conditionalContentRetrieve()\">Removed Articles: <span class=btn-filter-count>{{ customSearchService.excludesList().length }}</span> <span class=btn-filter-state><span ng-if=!removedFilterOn>Filter</span> <span ng-if=removedFilterOn>Clear</span></span></button></div></div><div><custom-search-content-item ng-repeat=\"content in customSearchService.content.results\" model=content controller-service=customSearchService on-update=$contentRetrieve()></custom-search-content-item></div><pagination boundary-links=true ng-change=$conditionalContentRetrieve() ng-model=customSearchService.$page max-size=10 total-items=customSearchService.content.count previous-text=&lsaquo; next-text=&rsaquo; first-text=&laquo; last-text=&raquo;></pagination></div>"
  );


  $templateCache.put('/components/editors-pick/editors-pick.html',
    "<h1>Editors Pick</h1><button ng-click=updateQueryData()>UPDATE</button> <button ng-click=updateConditionData()>UPDATE CONDITIONS</button><custom-search search-query-data=queryData></custom-search>"
  );


  $templateCache.put('/components/filter-widget/filter-widget.html',
    "<div class=filterwidget><div class=input-container><div class=\"input-group has-feedback\"><input class=\"filter-input form-control input-lg\" ng-class=\"{flattenbottom: tags.length > 0 || users.length > 0}\" autocomplete=off placeholder=Filter... ng-model=filterInputValue tabindex=1><div class=input-group-btn><button class=\"btn btn-lg btn-primary search-button\" ng-click=search()><span class=\"fa fa-search\"></span></button> <button class=\"btn btn-lg btn-danger search-button\" ng-click=clearSearch()><span class=\"fa fa-times\"></span></button></div></div><div class=filter-object-container><div class=\"taglikeobject label label-default\" ng-repeat=\"(key, f) in filterObjects\" data-key={{key}} ng-click=deleteFilter(key);><span class=glyphicon ng-class=\"{\r" +
    "\n" +
    "\t\t\t\t\t\t\t'glyphicon-tag': f.type == 'tags',\r" +
    "\n" +
    "\t\t\t\t\t\t\t'glyphicon-user': f.type == 'authors',\r" +
    "\n" +
    "\t\t\t\t\t\t\t'glyphicon-folder-open': f.type == 'feature_types'\r" +
    "\n" +
    "\t\t\t\t\t\t}\"></span> {{queryToLabelMappings[f.query]}}</div><div class=\"label label-default clear-button\" ng-click=clearFilters()><span class=\"fa fa-times-circle\"></span> <span>Clear filters</span></div></div></div><ul class=\"autocomplete dropdown-menu\" ng-show=\"filterInputValue.length > 0\"><li class=\"entry search\"><a ng-click=\"addFilter('search', filterInputValue);\"><span class=\"glyphicon glyphicon-search\"></span> Find articles containing \"{{filterInputValue}}\"</a></li><li class=entry ng-repeat=\"o in autocompleteArray\"><a ng-click=\"addFilter(o.param, o.value);\"><span class=glyphicon ng-class=\"{\r" +
    "\n" +
    "\t\t\t\t\t'glyphicon-tag': o.type == 'tag',\r" +
    "\n" +
    "\t\t\t\t\t'glyphicon-user': o.type == 'author',\r" +
    "\n" +
    "\t\t\t\t\t'glyphicon-folder-open': o.type == 'feature_type'\r" +
    "\n" +
    "\t\t\t\t}\"></span> {{o.name}}</a></li></ul></div>"
  );


  $templateCache.put('/components/generic-ajax-button/generic-ajax-button.html',
    "<button class=btn ng-init=\"state = STATES.DONE\" ng-class=\"{\r" +
    "\n" +
    "      '{{ cssBtnClassComplete || 'btn-success' }}': state === STATES.DONE,\r" +
    "\n" +
    "      '{{ cssBtnClassProgress || 'btn-info' }}': state === STATES.PROGRESS,\r" +
    "\n" +
    "      '{{ cssBtnClassError || 'btn-danger' }}': state === STATES.ERROR\r" +
    "\n" +
    "    }\" ng-click=doClick() ng-disabled=\"disableWhen() === true || state === STATES.PROGRESS\"><span ng-if=\"state === STATES.ERROR\"><i class=\"glyphicon glyphicon-remove\"></i> {{ textError || 'Error' }}</span> <span ng-if=\"state === STATES.PROGRESS\"><i class=\"glyphicon glyphicon-refresh fa-spin\"></i> {{ textProgress || 'In Progress...' }}</span> <span ng-if=\"state === STATES.DONE\"><i class=\"glyphicon {{ cssIconComplete || 'glyphicon-ok' }}\"></i> {{ textComplete || 'Complete' }}</span></button>"
  );


  $templateCache.put('/components/promoted-content/promoted-content-article/promoted-content-article.html',
    "<div class=\"panel panel-default\"><div class=panel-heading><h4 class=\"panel-title hideOverflow\"><span class=small><span class=pull-left><span ng-show=article.feature_type ng-bind-html=article.feature_type></span> <span ng-show=\"article.ratings[0].media_item.show && article.feature_type\">&middot;</span> <span ng-show=article.ratings[0].media_item.show ng-bind-html=article.ratings[0].media_item.show></span> <span ng-hide=\"article.ratings[0].media_item.show || article.feature_type\"><em>No type set</em></span></span><div class=\"article-publish-date pull-right\"><i class=\"fa fa-calendar\"></i> <span ng-show=article.published ng-bind-html=\"article.published|date: 'M/d/yy\\' @ \\' h:mm a' \"></span> <span ng-hide=article.published><em>Not published</em></span></div></span><br><div class=heading title={{article.title}} ng-show=article.title ng-bind-html=article.title></div></h4></div></div>"
  );


  $templateCache.put('/components/promoted-content/promoted-content-list/promoted-content-list.html',
    "<h3 class=\"clearfix row\"><div class=col-xs-5>Content List<br><span class=\"preview-time-heading small h6\"><span ng-show=pzoneData.previewTime>on {{ pzoneData.previewTime.toDate() | date: 'MMM d, yyyy @ h:mma' }}</span> <span ng-show=!pzoneData.previewTime>Now</span></span></div><div class=\"col-xs-7 text-right\"><promoted-content-save></promoted-content-save></div></h3><div class=\"alert alert-info\" ng-show=\"pzoneData.previewTime && pzoneData.previewTime.isBefore(moment())\"><i class=\"glyphicon glyphicon-info-sign\"></i> Viewing a past list, past lists cannot be modified.</div><div class=\"alert-action-in-progress alert alert-info\" ng-show=pzoneData.action><i class=\"glyphicon glyphicon-info-sign\"></i> <span>Select an item below to finish your {{ pzoneData.action }} operation.</span> <button ng-click=stopAction()>Cancel</button></div><div class=no-content ng-if=\"pzoneData.selectedPZone.content.length < 1\"><div class=\"dropzone dropzone-no-content\" ng-if=pzoneData.action ng-click=completeAction(0)></div><div class=content-cutoff>{{ pzoneData.selectedPZone.zone_length - pzoneData.selectedPZone.content.length }} spots left</div></div><ul class=article-list ui-sortable=sortableOptions ng-model=pzoneData.selectedPZone.content><li ng-repeat=\"article in pzoneData.selectedPZone.content\" ng-class=\"{\r" +
    "\n" +
    "        'ui-sortable-unsortable': pzoneData.action || pzoneData.previewTime !== null,\r" +
    "\n" +
    "        'time-unsortable': pzoneData.previewTime.isBefore(moment())\r" +
    "\n" +
    "      }\"><div class=article-wrapper ng-class=\"{'action-hoverable': pzoneData.action}\" ng-click=\"pzoneData.action && completeAction($index)\"><div class=\"article-tools btn-group-lg\"><button class=\"btn btn-default btn-link remove-content-btn\" ng-click=remove(article) ng-disabled=pzoneData.action ng-hide=\"pzoneData.previewTime && pzoneData.previewTime.isBefore(moment())\"><i class=\"glyphicon glyphicon-remove\"></i></button> <button class=\"btn btn-default btn-link remove-content-btn\" disabled ng-show=\"pzoneData.previewTime && pzoneData.previewTime.isBefore(moment())\"><i class=\"glyphicon glyphicon-lock\"></i></button> <button class=\"btn btn-default btn-link up-content-btn\" ng-click=moveUp($index) ng-disabled=\"pzoneData.action || $first || pzoneData.previewTime\"><i class=\"glyphicon glyphicon-chevron-up\"></i></button> <button class=\"btn btn-default btn-link dn-content-btn\" ng-click=moveDown($index) ng-disabled=\"pzoneData.action || $last || pzoneData.previewTime\"><i class=\"glyphicon glyphicon-chevron-down\"></i></button></div><promoted-content-article article=article></promoted-content-article></div><div class=content-cutoff ng-if=\"$index + 1 === pzoneData.selectedPZone.zone_length\">All {{ pzoneData.selectedPZone.zone_length }} spots filled, content below will not display</div><div class=content-cutoff ng-if=\"$last && pzoneData.selectedPZone.content.length < pzoneData.selectedPZone.zone_length\">{{ pzoneData.selectedPZone.zone_length - pzoneData.selectedPZone.content.length }} spots left</div></li></ul>"
  );


  $templateCache.put('/components/promoted-content/promoted-content-operations-list/promoted-content-operations-list.html',
    "<h3>Schedule <small class=title>{{ pzoneData.selectedPZone.name }}</small></h3><div class=form-group>From: <button class=\"btn btn-xs btn-info\" datetime-selection-modal-opener ng-model=scheduleDateFrom modal-title=\"See Schedule Starting At This Date\"><i class=\"glyphicon glyphicon-calendar\"></i> <span ng-show=scheduleDateFrom>{{ scheduleDateFrom.toDate() | date: 'MMM d, yyyy @ h:mma' }}</span> <span ng-show=!scheduleDateFrom>Select Date</span></button> to: <button class=\"btn btn-xs btn-info\" datetime-selection-modal-opener ng-model=scheduleDateTo modal-title=\"See Schedule up to This Date\"><i class=\"glyphicon glyphicon-calendar\"></i> <span ng-show=scheduleDateTo>{{ scheduleDateTo.toDate() | date: 'MMM d, yyyy @ h:mma' }}</span> <span ng-show=!scheduleDateTo>Select Date</span></button></div><div class=\"delete-status-message alert\" ng-show=deleteStatus.message ng-class=\"{\r" +
    "\n" +
    "      'alert-success': !deleteStatus.isError,\r" +
    "\n" +
    "      'alert-danger': deleteStatus.isError\r" +
    "\n" +
    "    }\"><i class=\"glyphicon glyphicon-info-sign\"></i> {{ deleteStatus.message }} <span class=alert-link ng-click=clearDeleteStatus()>Dismiss</span></div><ul class=operation-list-groups ng-init=\"openGroups = {}\"><li class=operation-list-group ng-repeat=\"group in aggregatedOperations\" ng-show=\"\r" +
    "\n" +
    "        (group[0].isSame(scheduleDateFrom, 'minute') || group[0].isAfter(scheduleDateFrom, 'minute')) &&\r" +
    "\n" +
    "          group[0].isBefore(scheduleDateTo, 'minute')\"><div class=operation-list-group-title><span ng-click=\"openGroups[$index] = !openGroups[$index]\"><i class=glyphicon ng-class=\"{\r" +
    "\n" +
    "              'glyphicon-chevron-right': !openGroups[$index],\r" +
    "\n" +
    "              'glyphicon-chevron-down': openGroups[$index] === true\r" +
    "\n" +
    "            }\" class=glyphicon></i> <span>{{ group[0].format(groupDateFormat) }}</span> <span>({{ group[1].length }} Events)</span></span> <button class=\"btn btn-xs btn-primary\" ng-click=setPreviewTime(group[0])><i class=\"glyphicon glyphicon-time\"></i> View</button></div><ul class=\"operation-list-group-operations list-group\" ng-show=\"openGroups[$index] === true\"><li class=\"operation-list-operation list-group-item\" ng-repeat=\"operation in group[1]\" ng-class=\"{\r" +
    "\n" +
    "            'text-muted': operation.whenAsMoment.isBefore(moment()),\r" +
    "\n" +
    "            'list-group-item-warning': !operation.whenAsMoment && operation.client_id >= 0\r" +
    "\n" +
    "          }\"><div class=\"operation-delete pull-left\"><button ng-if=operation.whenAsMoment.isAfter(moment()) class=\"btn btn-link btn-lg\" ng-click=removeOperation(operation)><i class=\"glyphicon glyphicon-remove\"></i></button><div class=\"btn btn-link btn-lg disabled operation-delete-lock\" ng-if=\"operation.whenAsMoment.isBefore(moment()) || operation.client_id >= 0\"><i class=\"glyphicon glyphicon-lock\"></i></div></div><div class=operation-body><div class=small><span>{{ operation.cleanType }}</span> <span ng-if=\"operation.cleanType === 'INSERT' || operation.cleanType === 'REPLACE'\">@ position {{operation.index + 1}}</span></div><div class=operation-title ng-bind-html=operation.content_title></div></div></li></ul></li><ul></ul></ul>"
  );


  $templateCache.put('/components/promoted-content/promoted-content-pzone-select/promoted-content-pzone-select.html',
    "<div class=form-horizontal><label for=pzone-select class=control-label>Choose Location to Schedule:</label><select id=pzone-select name=pzone class=form-control ng-model=selectedPZoneName ng-change=changePZone(selectedPZoneName)><option value=\"{{ pzone.name }}\" ng-selected=\"pzone.name === selectedPZoneName\" ng-repeat=\"pzone in pzoneData.pzones | orderBy:'name'\">{{ pzone.name }}</option></select></div>"
  );


  $templateCache.put('/components/promoted-content/promoted-content-save/promoted-content-save.html',
    "<button class=\"btn btn-sm btn-link\" ng-click=clearOperations() ng-disabled=\"pzoneData.selectedPZone.saved || (data.previewTime && pzoneData.unsavedOperations.length < 1)\"><i class=\"glyphicon glyphicon-remove\"></i> <span>Reset</span></button> <button class=\"btn btn-sm btn-success\" ng-click=savePZone() ng-disabled=\"pzoneData.selectedPZone.saved || (data.previewTime && pzoneData.unsavedOperations.length < 1)\"><i class=\"glyphicon glyphicon-floppy-disk\"></i> <span ng-if=!pzoneData.previewTime>Publish</span> <span ng-if=pzoneData.previewTime>Schedule</span></button><br><span class=\"h6 operation-count text-muted\" ng-show=\"pzoneData.unsavedOperations && pzoneData.unsavedOperations.length > 0\"><span>{{ pzoneData.unsavedOperations.length }} Unsaved</span> <span ng-show=\"pzoneData.unsavedOperations.length === 1\">Operation</span> <span ng-show=\"pzoneData.unsavedOperations.length > 1\">Operations</span></span>"
  );


  $templateCache.put('/components/promoted-content/promoted-content-search/promoted-content-search.html',
    "<h3>Search Content</h3><div class=row><filter-widget class=col-xs-12></filter-widget><status-filter class=\"col-xs-12 form-group\"></status-filter></div><div class=article-wrapper ng-repeat=\"article in pzoneData.allContent.content\"><div ng-if=contentIsEnabled(article)><promoted-content-article class=actionable-content article=article ng-click=\"(toolsOpenFor(article) && closeTools()) || openToolsFor(article)\"></promoted-content-article><div ng-if=toolsOpenFor(article) class=article-tools><button class=\"btn btn-xs btn-primary\" ng-disabled=pzoneData.action ng-click=beginInsert(article)><i class=\"glyphicon glyphicon-plus\"></i> Insert</button> <button class=\"btn btn-xs btn-primary\" ng-disabled=pzoneData.action ng-click=beginReplace(article)><i class=\"glyphicon glyphicon-transfer\"></i> Replace</button> <button class=\"btn btn-xs btn-danger\" ng-show=pzoneData.action ng-click=stopAction()><i class=\"glyphicon glyphicon-remove\"></i> Cancel</button> <a class=btn-edit-article href=#/cms/app/edit/{{article.id}} target=_blank><button class=\"btn btn-xs btn-info\"><i class=\"fa fa-pencil\"></i> <span>Edit...</span></button></a></div></div><div ng-if=!contentIsEnabled(article) tooltip=\"This article cannot be promoted because it is unpublished, occurs after selected time, you are viewing a past list, or it is already in this list.\" tooltip-placement=left tooltip-trigger=mouseenter><promoted-content-article class=non-actionable-content article=article></promoted-content-article></div></div><pagination max-size=10 total-items=pzoneData.allContent.content.metadata.count ng-model=pageNumber items-per-page=20 ng-change=goToPage() boundary-links=true first-text=\"<<\" previous-text=\"<\" next-text=\">\" last-text=\">>\"></pagination>"
  );


  $templateCache.put('/components/promoted-content/promoted-content-time-picker/promoted-content-time-picker.html',
    "<div class=row><div class=\"col-xs-12 col-md-7 form-group\"><div class=form-horizontal><div class=form-group><div class=col-xs-6><label class=control-label>Promote Content:</label><button class=\"btn form-control\" ng-click=setPreviewTimeToImmediate() ng-class=\"{'btn-primary': !contentData.previewTime}\"><span>Immediately</span></button></div><div class=col-xs-6><label for=choose-pzone-time class=control-label>Or Choose Date/Time:</label><button id=choose-pzone-time class=\"btn btn-default form-control\" datetime-selection-modal-opener ng-class=\"{'btn-primary': contentData.previewTime}\" modal-title=\"Preview PZone at this Time\" modal-on-close=setPreviewTime(newDate)><span ng-show=contentData.previewTime>{{ contentData.previewTime.format('M/D/YY, h:mma') }}</span> <span ng-show=!contentData.previewTime>Use Date...</span> <i class=\"glyphicon glyphicon-time\"></i></button></div></div></div></div></div>"
  );


  $templateCache.put('/components/promoted-content/promoted-content.html',
    "<nav-bar view=nav></nav-bar><div class=\"wrapper container-fluid\"><h2>Promoted Content</h2><div class=row><div class=\"cf well well-sm\"><div class=col-md-4><promoted-content-pzone-select></promoted-content-pzone-select></div><div class=col-md-8><promoted-content-time-picker></promoted-content-time-picker></div></div></div><div class=row><div class=col-md-6><promoted-content-list></promoted-content-list></div><div class=col-md-6><ul class=\"nav nav-tabs\" role=tablist><li class=active><a href=#withSearch data-toggle=tab>Search</a></li><li><a href=#withOperations data-toggle=tab>Schedule</a></li></ul><div class=tab-content><promoted-content-search class=\"tab-pane active\" id=withSearch></promoted-content-search><promoted-content-operations-list class=tab-pane id=withOperations></promoted-content-operations-list></div></div></div></div>"
  );


  $templateCache.put('/components/sections/sections-edit/sections-edit.html',
    "<top-bar logo-href=\"#/cms/app/section/\" save-function=saveModel save-disable-when=\"model.$dirty().length === 0 && !isNew && !needsSave\"></top-bar><div class=\"container col-xs-offset-2 col-xs-8\"><h3><a href=\"#/cms/app/section/\">Sections</a> &gt; <span ng-if=\"isNew && !model.name\">New Section</span> <span ng-if=\"!isNew || model.name\">{{ model.name }}</span></h3><div class=\"row well\"><div class=\"row col-md-12\"><div class=\"form-group col-md-3\"><label for=sectionName>Section Name</label><input id=sectionName ng-model=model.name class=form-control></div><div class=col-md-7><label for=sectionSlug>Section URL</label><div class=input-group><span class=input-group-addon>{{ LIST_URL }}</span> <input id=sectionSlug class=form-control ng-model=model.slug><copy-button class=input-group-btn content=\"{{ LIST_URL + model.slug }}\"></copy-button></div></div></div><div class=\"row col-md-8\"><div class=\"form-group col-md-12\"><label for=sectionDescription>Description</label><textarea id=sectionDescription type=text ng-model=model.description class=form-control>\r" +
    "\n" +
    "        </textarea></div><div class=\"form-group col-md-12\"><label for=sectionEmbedCode>Right Rail Embed Code</label><textarea id=sectionEmbedCode type=text ng-model=model.embedCode class=form-control>\r" +
    "\n" +
    "        </textarea></div></div><div class=\"row col-md-4\"><div class=\"form-group col-md-12\"><label>Section Logo</label><bettyeditable image=model.sectionLogo ratio=16x9 placeholder-text=\"Section Logo\" add-styles=\"fa fa-picture-o\"></bettyeditable></div><div class=\"form-group col-md-12\"><label for=sectionTwitterHandle>Twitter Handle</label><input id=sectionTwitterHandle ng-model=model.twitterHandle class=form-control></div><div class=\"form-group col-md-12\"><label><input id=sectionPromote type=checkbox ng-model=model.promoted> <span>Promote this list on the home page</span></label></div></div></div><div class=row role=tabpanel><ul role=tablist class=\"nav nav-tabs\"><li role=presentation class=active><a href=#paneQuery role=tab data-toggle=tab>Add Content</a></li></ul></div><div class=\"row tab-content well\"><div id=paneQuery role=tabpanel class=\"tab-pane active\"><custom-search ng-model=model.query on-update=\"needsSave = true\"></custom-search></div></div></div>"
  );


  $templateCache.put('/components/sections/sections-list/sections-list-page.html',
    "<nav-bar view=nav></nav-bar><div class=\"container col-xs-offset-1 col-xs-10\"><cms-notify-container class=cms-notify-container></cms-notify-container><list-page cms-page=section model-factory=modelFactory tool-copy-content=\"'{{ LIST_URL }}' + record.slug \"></list-page></div>"
  );


  $templateCache.put('/components/special-coverage/special-coverage-edit/special-coverage-edit.html',
    "<top-bar logo-href=\"#/cms/app/special-coverage/\" save-function=saveModel save-disable-when=\"model.$dirty().length === 0 && !isNew && !needsSave\"></top-bar><div class=\"container col-xs-offset-2 col-xs-8\"><h3><a href=#/cms/app/special-coverage>Special Coverage Lists</a> &gt; <span ng-if=\"isNew && !model.name\">New Special Coverage</span> <span ng-if=\"!isNew || model.name\">{{ model.name }}</span></h3><div class=\"row well\"><div class=row><div class=\"form-group col-md-3\"><label for=specialCoverageName>Name</label><input id=specialCoverageName ng-model=model.name class=form-control required></div><div class=col-md-7><label for=specialCoverageSlug>List URL</label><div class=input-group><span class=input-group-addon>{{ LIST_URL }}</span> <input id=specialCoverageSlug class=form-control ng-model=model.slug><copy-button class=input-group-btn content=\"{{ LIST_URL + model.slug }}\"></copy-button></div></div></div><div class=row><div class=\"form-group col-md-12\"><label for=specialCoverageDescription>Description</label><textarea id=specialCoverageDescription type=text ng-model=model.description class=form-control>\r" +
    "\n" +
    "        </textarea></div></div><div class=row><div class=\"form-group col-md-3\"><label for=specialCoverageActiveState>Active <i class=\"glyphicon glyphicon-info-sign text-info\" tooltip=\"'Active' lists will rotate through all site promotion areas. To always display on the homepage select 'Pin To HP'. Note: there are only three homepage slots so please limit the number of pinned lists.\" tooltip-trigger=mouseenter tooltip-placement=top></i></label><select id=specialCoverageActiveState class=form-control ng-model=model.$activeState ng-model-options=\"{getterSetter: true}\"><option value=\"{{ ACTIVE_STATES.ACTIVE }}\">{{ ACTIVE_STATES.ACTIVE }}</option><option value=\"{{ ACTIVE_STATES.PROMOTED }}\">{{ ACTIVE_STATES.PROMOTED }}</option><option value=\"{{ ACTIVE_STATES.INACTIVE }}\">{{ ACTIVE_STATES.INACTIVE }}</option></select></div><div class=\"form-group col-md-5\"><label for=specialCoverageCampaign>Sponsor Campaign</label><autocomplete-basic class=form-control ng-if=\"!model.campaign || model.campaign.$resolved\" ng-model=model.campaign item-display-formatter=\"item.sponsorName + ' - ' + item.campaignLabel\" on-select=\"$parent.needsSave = true\" input-id=specialCoverageCampaign input-placeholder=\"e.g. 0-1337 Honda\" search-function=searchCampaigns></autocomplete-basic></div></div></div><div class=row role=tabpanel><ul role=tablist class=\"nav nav-tabs\"><li role=presentation class=active><a href=#paneQuery role=tab data-toggle=tab>Add Content</a></li><li role=presentation><a href=#paneVideos role=tab data-toggle=tab>Add Videos</a></li></ul></div><div class=\"row tab-content well\"><div id=paneQuery role=tabpanel class=\"tab-pane active\"><h4>Content List</h4><custom-search ng-model=model.query on-update=\"needsSave = true\"></custom-search></div><div id=paneVideos role=tabpanel class=tab-pane><h4>Video Playlist</h4><video-list videos=model.videos on-update=\"needsSave = true\" add-video=model.addVideo(video)></video-list></div></div></div>"
  );


  $templateCache.put('/components/special-coverage/special-coverage-list/special-coverage-list-page.html',
    "<nav-bar view=nav></nav-bar><div class=\"container col-xs-offset-1 col-xs-10\"><cms-notify-container class=cms-notify-container></cms-notify-container><list-page cms-page=special-coverage model-factory=modelFactory tool-copy-content=\"'{{ LIST_URL }}' + record.slug \"></list-page></div>"
  );


  $templateCache.put('/components/status-filter/status-filter.html',
    "<div id=pubLevels class=\"btn-group btn-group-md\"><a ng-repeat=\"option in options\" ng-class=\"{ active: isActive(option) }\" ng-click=filterByStatus(option); class=\"btn btn-default\" href=\"\">{{option.label}}</a></div>"
  );


  $templateCache.put('/components/template-type-field/template-type-field.html',
    "<div class=form-group><label for=templateTypesField>Template</label><select id=templateTypesField class=form-control name=template_type ng-model=content.template_type ng-options=\"template.slug as template.name for template in templateTypes\"><option value=\"\" label=Default>Default</option></select></div>"
  );


  $templateCache.put('/components/top-bar/top-bar-base.html',
    "<nav class=\"navbar navbar-default navbar-fixed-top\" role=navigation><div class=container-fluid><div class=navbar-header><a id=logo class=navbar-brand href=\"{{ logoHref || '#/cms/app/list' }}\"><img ng-src=\"{{ NAV_LOGO }}\"></a></div><div class=\"collapse navbar-collapse\" id=navbar-collapse><ul class=\"nav navbar-nav edit-page-nav container-fluid\"><li class=dropdown ng-if=\"itemsDropdown.length > 0\"><a href=# class=dropdown-toggle data-toggle=dropdown>{{ itemsDropdownTitle || 'Tools' }} <b class=caret></b></a><ul class=dropdown-menu><li ng-repeat=\"item in itemsDropdown\"><button class=\"{{ item.containerClasses }}\" ng-click=item.clickFunction()><i ng-if=item.displayIconClasses class=\"{{ item.displayIconClasses }}\"></i> {{ item.displayText }}</button></li></ul></li></ul><div class=\"nav navbar-nav navbar-right\"><save-button ng-if=saveFunction click-function=saveFunction disable-when=saveDisableWhen()></save-button></div></div></div></nav>"
  );


  $templateCache.put('/shared/copy-button/copy-button.html',
    "<button class=\"{{ buttonClassesDefault || 'btn btn-info' }}\" ng-if=\"!okCopy && content\" ng-click=okCopyButton() clip-copy=content><i class=\"glyphicon glyphicon-paperclip\"></i></button> <button class=\"{{ buttonClassesSuccess || 'btn btn-success' }}\" ng-if=okCopy disabled><i class=\"glyphicon glyphicon-ok\"></i></button> <button class=\"{{ buttonClassesDefault || 'btn btn-info' }}\" ng-if=\"!okCopy && !content\" disabled><i class=\"glyphicon glyphicon-paperclip\"></i></button>"
  );


  $templateCache.put('/shared/list-page/list-page.html',
    "<div class=list-page-heading><h2 class=pull-left>{{ namePlural }}</h2><button class=\"btn btn-primary pull-right\" ng-click=$add()><i class=\"glyphicon glyphicon-plus\"></i> Add {{ name }}</button><div class=clearfix></div></div><div ng-if=\"$list.length > 0\"><table class=\"table table-striped\"><thead><tr><td ng-class=\"{'td-sorts': field.sorts}\" ng-repeat=\"field in fields track by $index\" ng-click=$sort(field)>{{ field.title }} <i class=\"fa fa-sort\" ng-show=\"field.sorts && sortingField !== field.title\"></i> <i class=\"fa fa-sort-asc\" ng-show=\"field.sorts && sortDirection === 'asc'  && sortingField === field.title\"></i> <i class=\"fa fa-sort-desc\" ng-show=\"field.sorts && sortDirection ==='desc' && sortingField === field.title\"></i></td><td></td></tr></thead><tbody><tr ng-repeat=\"item in $list\"><td ng-repeat=\"field in fields\">{{ field.evaluate(item) }}</td><td><button class=\"btn btn-xs btn-info\" ng-click=goToEditPage(item)><i class=\"glyphicon glyphicon-pencil\"></i></button><copy-button ng-if=toolCopyContent content=\"{{ copyContentInContext(item) }}\" button-classes-default=\"btn btn-xs btn-info\" button-classes-success=\"btn btn-xs btn-success\"></copy-button><button class=\"btn btn-xs btn-danger\" confirmation-modal-opener modal-body=\"Are you sure you want to delete this {{ name }}?\" modal-title=\"Delete {{ name }}\" modal-ok-text=Delete modal-on-ok=$remove(item)><i class=\"glyphicon glyphicon-remove\"></i></button></td></tr></tbody></table><pagination boundary-links=true ng-change=$retrieve() ng-model=$list.$page max-size=10 total-items=$list.$totalCount previous-text=&lsaquo; next-text=&rsaquo; first-text=&laquo; last-text=&raquo;></pagination></div><div class=\"text-primary no-items-message\" ng-if=\"$list.length === 0\">No {{ namePlural }}, click \"Add {{ name }}\" below to add the first {{ name }}!</div>"
  );


  $templateCache.put('/shared/video-list/video-list-video/video-list-video.html',
    "<div class=wrapper-content><div class=content-id>Video ID: {{ model.id }} | {{ model.channel.name }}</div><div class=content-title>{{ model.title }}</div></div><div class=wrapper-published><div class=published><div class=published-top>Published</div><div class=published-date>{{ (model.published | date_string_to_moment).format('M/D/YYYY, h:mma') }}</div></div></div>"
  );


  $templateCache.put('/shared/video-list/video-list.html',
    "<div class=video-list-title><span class=bold>Current List</span> <span>Items in List: <span class=bold>{{ videos.length }}</span></span></div><autocomplete-basic class=form-control item-display-formatter=item.title on-select=\"addVideo(selection.value); $parent.needsSave = true\" input-placeholder=\"Search {{ videoChannel }} videos...\" search-function=searchVideos></autocomplete-basic><ul class=video-list-videos ng-if=\"videos.length > 0\" ui-sortable=sortableOptions ng-model=videos><li ng-repeat=\"video in videos\"><div class=wrapper-tools><button class=\"btn btn-danger rm-btn\" ng-click=delete($index)><i class=\"glyphicon glyphicon-remove\"></i></button> <button class=\"btn btn-info up-btn\" ng-click=moveUp($index) ng-disabled=$first><i class=\"glyphicon glyphicon-chevron-up\"></i></button> <button class=\"btn btn-info dn-btn\" ng-click=moveDown($index) ng-disabled=$last><i class=\"glyphicon glyphicon-chevron-down\"></i></button></div><video-list-video model=video></video-list-video></li></ul><div class=text-primary ng-if=\"videos.length === 0\">There are no videos in this list, search for a video to add to playlist.</div>"
  );

}]);
