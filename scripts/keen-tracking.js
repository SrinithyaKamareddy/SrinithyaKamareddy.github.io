<script>
(function(name,path,ctx){ctx[name]=ctx[name]||{ready:function(fn){var h=document.getElementsByTagName('head')[0],s=document.createElement('script'),w=window,loaded;s.onload=s.onerror=s.onreadystatechange=function(){if((s.readyState&&!(/^c|loade/.test(s.readyState)))||loaded){return}s.onload=s.onreadystatechange=null;loaded=1;ctx[name].ready(fn)};s.async=1;s.src=path;h.parentNode.insertBefore(s,h)}}})
('KeenTracking', 'https://cdn.jsdelivr.net/npm/keen-tracking@4/dist/keen-tracking.min.js', this);

KeenTracking.ready(function(){
  const client = new KeenTracking({
    projectId: '5bede92dc9e77c0001a12c38',
    writeKey: '3C7881F961244990E5549D022A0635474C3DB35AE24B34E6169CA3040319A33E1BED1A173678549854FFA2107CA9F3EAFB3D7DF472E037F1F359A6E40F9F000EA823B89C16E9BA1958E3B4111B90EF64B2F57E167B18DA93FDC7ED9578B494B8'
  });
client.initAutoTracking();
});
</script>