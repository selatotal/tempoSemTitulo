window.fbAsyncInit = function() {
FB.init({
  appId      : '379199121951',
  xfbml      : true,
  version    : 'v2.1'
});
};

(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/pt_BR/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

urlShare = function(){

	FB.ui({
		method: 'share',
		href: encodeURI("http://www.nois.com.br/temposemtitulo/"),
	}, function response(){});

}
