



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="https://ssl.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = "9u42vFDyQPuocQcMkxHs-nv8CL8:1394721196763";
 
 
 var CS_env = {"domainName": null, "relativeBaseUrl": "", "assetHostPath": "https://ssl.gstatic.com/codesite/ph", "loggedInUserEmail": "alex.hills@bgc.bard.edu", "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/11512667522589661435", "token": "9u42vFDyQPuocQcMkxHs-nv8CL8:1394721196763", "projectName": "google-maps-utility-library-v3", "projectHomeUrl": "/p/google-maps-utility-library-v3", "profileUrl": "/u/116088652966931966931/"};
 var _gaq = _gaq || [];
 _gaq.push(
 ['siteTracker._setAccount', 'UA-18071-1'],
 ['siteTracker._trackPageview']);
 
 _gaq.push(
 ['projectTracker._setAccount', 'UA-12846745-3'],
 ['projectTracker._trackPageview']);
 
 (function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 })();
 
 </script>
 
 
 <title>maplabel.js - 
 google-maps-utility-library-v3 -
 
 
 Open source project to be a central repository of utility libraries that can be used with the Google Maps API JavaScript v3. - Google Project Hosting
 </title>
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/11512667522589661435/css/core.css">
 
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/11512667522589661435/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/11512667522589661435/css/d_sb.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/11512667522589661435/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 font-size: 1em;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 
 
.list {
 border: 1px solid white;
 border-bottom: 0;
}

 
 </style>
</head>
<body class="t4">
<script type="text/javascript">
 window.___gcfg = {lang: 'en'};
 (function() 
 {var po = document.createElement("script");
 po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/plusone.js";
 var s = document.getElementsByTagName("script")[0];
 s.parentNode.insertBefore(po, s);
 })();
</script>
<div class="headbg">

 <div id="gaia">
 

 <span>
 
 
 
 <a href="#" id="multilogin-dropdown" onclick="return false;"
 ><u><b>alex.hills@bgc.bard.edu</b></u> <small>&#9660;</small></a>
 
 
 | <a href="/u/116088652966931966931/" id="projects-dropdown" onclick="return false;"
 ><u>My favorites</u> <small>&#9660;</small></a>
 | <a href="/u/116088652966931966931/" onclick="_CS_click('/gb/ph/profile');"
 title="Profile, Updates, and Settings"
 ><u>Profile</u></a>
 | <a href="https://www.google.com/accounts/Logout?continue=https%3A%2F%2Fcode.google.com%2Fp%2Fgoogle-maps-utility-library-v3%2Fsource%2Fbrowse%2Ftrunk%2Fmaplabel%2Fsrc%2Fmaplabel.js" 
 onclick="_CS_click('/gb/ph/signout');"
 ><u>Sign out</u></a>
 
 </span>

 </div>

 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
<!--[if lte IE 7]>
<div style="text-align:center;">
Your version of Internet Explorer is not supported. Try a browser that
contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
<a href="http://www.google.com/chrome">Google Chrome</a>, or
<a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
</div>
<![endif]-->



 <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0"
 itemscope itemtype="http://schema.org/CreativeWork">
 <tr style="height: 58px;">
 
 
 
 <td id="plogo">
 <link itemprop="url" href="/p/google-maps-utility-library-v3">
 <a href="/p/google-maps-utility-library-v3/">
 
 <img src="https://ssl.gstatic.com/codesite/ph/images/defaultlogo.png" alt="Logo" itemprop="image">
 
 </a>
 </td>
 
 <td style="padding-left: 0.5em">
 
 <div id="pname">
 <a href="/p/google-maps-utility-library-v3/"><span itemprop="name">google-maps-utility-library-v3</span></a>
 </div>
 
 <div id="psum">
 <a id="project_summary_link"
 href="/p/google-maps-utility-library-v3/"><span itemprop="description">Open source project to be a central repository of utility libraries that can be used with the Google Maps API JavaScript v3.</span></a>
 
 </div>
 
 
 </td>
 <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
 <form action="/hosting/search">
 <input size="30" name="q" value="" type="text">
 
 <input type="submit" name="projectsearch" value="Search projects" >
 </form>
 
 </tr>
 </table>

</div>

 
<div id="mt" class="gtb"> 
 <a href="/p/google-maps-utility-library-v3/" class="tab ">Project&nbsp;Home</a>
 
 
 
 
 
 
 <a href="/p/google-maps-utility-library-v3/w/list" class="tab ">Wiki</a>
 
 
 
 
 
 <a href="/p/google-maps-utility-library-v3/issues/list"
 class="tab ">Issues</a>
 
 
 
 
 
 <a href="/p/google-maps-utility-library-v3/source/checkout"
 class="tab active">Source</a>
 
 
 
 
 
 
 
 
 <div class=gtbc></div>
</div>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 


 <span class="inst1"><a href="/p/google-maps-utility-library-v3/source/checkout">Checkout</a></span> &nbsp;
 <span class="inst2"><a href="/p/google-maps-utility-library-v3/source/browse/">Browse</a></span> &nbsp;
 <span class="inst3"><a href="/p/google-maps-utility-library-v3/source/list">Changes</a></span> &nbsp;
 
 
 
 
 
 
 
 </form>
 <script type="text/javascript">
 
 function codesearchQuery(form) {
 var query = document.getElementById('q').value;
 if (query) { form.action += '%20' + query; }
 }
 </script>
 </div>
</div>

 </td>
 
 
 
 <td align="right" valign="top" class="bevel-right"></td>
 </tr>
</table>


<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>
<div id="maincol"
 
>

 




<div class="collapse">
<div id="colcontrol">
<style type="text/css">
 #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<table id="nav_and_rev" class="list"
 cellpadding="0" cellspacing="0" width="100%">
 <tr>
 
 <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
 <strong class="src_nav">Source path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/p/google-maps-utility-library-v3/source/browse/">svn</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed"><a href="/p/google-maps-utility-library-v3/source/browse/trunk/">trunk</a><span class="sp">/&nbsp;</span><a href="/p/google-maps-utility-library-v3/source/browse/trunk/maplabel/">maplabel</a><span class="sp">/&nbsp;</span><a href="/p/google-maps-utility-library-v3/source/browse/trunk/maplabel/src/">src</a><span class="sp">/&nbsp;</span>maplabel.js</span>
 
 


 </td>
 
 
 <td nowrap="nowrap" width="33%" align="center">
 <a href="/p/google-maps-utility-library-v3/source/browse/trunk/maplabel/src/maplabel.js?edit=1"
 ><img src="https://ssl.gstatic.com/codesite/ph/images/pencil-y14.png"
 class="edit_icon">Edit file</a>
 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper">
 <ul class="leftside">
 
 <li><a href="/p/google-maps-utility-library-v3/source/browse/trunk/maplabel/src/maplabel.js?r=300" title="Previous">&lsaquo;r300</a></li>
 
 </ul>
 </td>
 
 <td class="flipper"><b>r465</b></td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
 background-image: url(https://ssl.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svn465_1"

><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svn465_2"

><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svn465_3"

><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svn465_4"

><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svn465_5"

><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svn465_6"

><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svn465_7"

><td id="7"><a href="#7">7</a></td></tr
><tr id="gr_svn465_8"

><td id="8"><a href="#8">8</a></td></tr
><tr id="gr_svn465_9"

><td id="9"><a href="#9">9</a></td></tr
><tr id="gr_svn465_10"

><td id="10"><a href="#10">10</a></td></tr
><tr id="gr_svn465_11"

><td id="11"><a href="#11">11</a></td></tr
><tr id="gr_svn465_12"

><td id="12"><a href="#12">12</a></td></tr
><tr id="gr_svn465_13"

><td id="13"><a href="#13">13</a></td></tr
><tr id="gr_svn465_14"

><td id="14"><a href="#14">14</a></td></tr
><tr id="gr_svn465_15"

><td id="15"><a href="#15">15</a></td></tr
><tr id="gr_svn465_16"

><td id="16"><a href="#16">16</a></td></tr
><tr id="gr_svn465_17"

><td id="17"><a href="#17">17</a></td></tr
><tr id="gr_svn465_18"

><td id="18"><a href="#18">18</a></td></tr
><tr id="gr_svn465_19"

><td id="19"><a href="#19">19</a></td></tr
><tr id="gr_svn465_20"

><td id="20"><a href="#20">20</a></td></tr
><tr id="gr_svn465_21"

><td id="21"><a href="#21">21</a></td></tr
><tr id="gr_svn465_22"

><td id="22"><a href="#22">22</a></td></tr
><tr id="gr_svn465_23"

><td id="23"><a href="#23">23</a></td></tr
><tr id="gr_svn465_24"

><td id="24"><a href="#24">24</a></td></tr
><tr id="gr_svn465_25"

><td id="25"><a href="#25">25</a></td></tr
><tr id="gr_svn465_26"

><td id="26"><a href="#26">26</a></td></tr
><tr id="gr_svn465_27"

><td id="27"><a href="#27">27</a></td></tr
><tr id="gr_svn465_28"

><td id="28"><a href="#28">28</a></td></tr
><tr id="gr_svn465_29"

><td id="29"><a href="#29">29</a></td></tr
><tr id="gr_svn465_30"

><td id="30"><a href="#30">30</a></td></tr
><tr id="gr_svn465_31"

><td id="31"><a href="#31">31</a></td></tr
><tr id="gr_svn465_32"

><td id="32"><a href="#32">32</a></td></tr
><tr id="gr_svn465_33"

><td id="33"><a href="#33">33</a></td></tr
><tr id="gr_svn465_34"

><td id="34"><a href="#34">34</a></td></tr
><tr id="gr_svn465_35"

><td id="35"><a href="#35">35</a></td></tr
><tr id="gr_svn465_36"

><td id="36"><a href="#36">36</a></td></tr
><tr id="gr_svn465_37"

><td id="37"><a href="#37">37</a></td></tr
><tr id="gr_svn465_38"

><td id="38"><a href="#38">38</a></td></tr
><tr id="gr_svn465_39"

><td id="39"><a href="#39">39</a></td></tr
><tr id="gr_svn465_40"

><td id="40"><a href="#40">40</a></td></tr
><tr id="gr_svn465_41"

><td id="41"><a href="#41">41</a></td></tr
><tr id="gr_svn465_42"

><td id="42"><a href="#42">42</a></td></tr
><tr id="gr_svn465_43"

><td id="43"><a href="#43">43</a></td></tr
><tr id="gr_svn465_44"

><td id="44"><a href="#44">44</a></td></tr
><tr id="gr_svn465_45"

><td id="45"><a href="#45">45</a></td></tr
><tr id="gr_svn465_46"

><td id="46"><a href="#46">46</a></td></tr
><tr id="gr_svn465_47"

><td id="47"><a href="#47">47</a></td></tr
><tr id="gr_svn465_48"

><td id="48"><a href="#48">48</a></td></tr
><tr id="gr_svn465_49"

><td id="49"><a href="#49">49</a></td></tr
><tr id="gr_svn465_50"

><td id="50"><a href="#50">50</a></td></tr
><tr id="gr_svn465_51"

><td id="51"><a href="#51">51</a></td></tr
><tr id="gr_svn465_52"

><td id="52"><a href="#52">52</a></td></tr
><tr id="gr_svn465_53"

><td id="53"><a href="#53">53</a></td></tr
><tr id="gr_svn465_54"

><td id="54"><a href="#54">54</a></td></tr
><tr id="gr_svn465_55"

><td id="55"><a href="#55">55</a></td></tr
><tr id="gr_svn465_56"

><td id="56"><a href="#56">56</a></td></tr
><tr id="gr_svn465_57"

><td id="57"><a href="#57">57</a></td></tr
><tr id="gr_svn465_58"

><td id="58"><a href="#58">58</a></td></tr
><tr id="gr_svn465_59"

><td id="59"><a href="#59">59</a></td></tr
><tr id="gr_svn465_60"

><td id="60"><a href="#60">60</a></td></tr
><tr id="gr_svn465_61"

><td id="61"><a href="#61">61</a></td></tr
><tr id="gr_svn465_62"

><td id="62"><a href="#62">62</a></td></tr
><tr id="gr_svn465_63"

><td id="63"><a href="#63">63</a></td></tr
><tr id="gr_svn465_64"

><td id="64"><a href="#64">64</a></td></tr
><tr id="gr_svn465_65"

><td id="65"><a href="#65">65</a></td></tr
><tr id="gr_svn465_66"

><td id="66"><a href="#66">66</a></td></tr
><tr id="gr_svn465_67"

><td id="67"><a href="#67">67</a></td></tr
><tr id="gr_svn465_68"

><td id="68"><a href="#68">68</a></td></tr
><tr id="gr_svn465_69"

><td id="69"><a href="#69">69</a></td></tr
><tr id="gr_svn465_70"

><td id="70"><a href="#70">70</a></td></tr
><tr id="gr_svn465_71"

><td id="71"><a href="#71">71</a></td></tr
><tr id="gr_svn465_72"

><td id="72"><a href="#72">72</a></td></tr
><tr id="gr_svn465_73"

><td id="73"><a href="#73">73</a></td></tr
><tr id="gr_svn465_74"

><td id="74"><a href="#74">74</a></td></tr
><tr id="gr_svn465_75"

><td id="75"><a href="#75">75</a></td></tr
><tr id="gr_svn465_76"

><td id="76"><a href="#76">76</a></td></tr
><tr id="gr_svn465_77"

><td id="77"><a href="#77">77</a></td></tr
><tr id="gr_svn465_78"

><td id="78"><a href="#78">78</a></td></tr
><tr id="gr_svn465_79"

><td id="79"><a href="#79">79</a></td></tr
><tr id="gr_svn465_80"

><td id="80"><a href="#80">80</a></td></tr
><tr id="gr_svn465_81"

><td id="81"><a href="#81">81</a></td></tr
><tr id="gr_svn465_82"

><td id="82"><a href="#82">82</a></td></tr
><tr id="gr_svn465_83"

><td id="83"><a href="#83">83</a></td></tr
><tr id="gr_svn465_84"

><td id="84"><a href="#84">84</a></td></tr
><tr id="gr_svn465_85"

><td id="85"><a href="#85">85</a></td></tr
><tr id="gr_svn465_86"

><td id="86"><a href="#86">86</a></td></tr
><tr id="gr_svn465_87"

><td id="87"><a href="#87">87</a></td></tr
><tr id="gr_svn465_88"

><td id="88"><a href="#88">88</a></td></tr
><tr id="gr_svn465_89"

><td id="89"><a href="#89">89</a></td></tr
><tr id="gr_svn465_90"

><td id="90"><a href="#90">90</a></td></tr
><tr id="gr_svn465_91"

><td id="91"><a href="#91">91</a></td></tr
><tr id="gr_svn465_92"

><td id="92"><a href="#92">92</a></td></tr
><tr id="gr_svn465_93"

><td id="93"><a href="#93">93</a></td></tr
><tr id="gr_svn465_94"

><td id="94"><a href="#94">94</a></td></tr
><tr id="gr_svn465_95"

><td id="95"><a href="#95">95</a></td></tr
><tr id="gr_svn465_96"

><td id="96"><a href="#96">96</a></td></tr
><tr id="gr_svn465_97"

><td id="97"><a href="#97">97</a></td></tr
><tr id="gr_svn465_98"

><td id="98"><a href="#98">98</a></td></tr
><tr id="gr_svn465_99"

><td id="99"><a href="#99">99</a></td></tr
><tr id="gr_svn465_100"

><td id="100"><a href="#100">100</a></td></tr
><tr id="gr_svn465_101"

><td id="101"><a href="#101">101</a></td></tr
><tr id="gr_svn465_102"

><td id="102"><a href="#102">102</a></td></tr
><tr id="gr_svn465_103"

><td id="103"><a href="#103">103</a></td></tr
><tr id="gr_svn465_104"

><td id="104"><a href="#104">104</a></td></tr
><tr id="gr_svn465_105"

><td id="105"><a href="#105">105</a></td></tr
><tr id="gr_svn465_106"

><td id="106"><a href="#106">106</a></td></tr
><tr id="gr_svn465_107"

><td id="107"><a href="#107">107</a></td></tr
><tr id="gr_svn465_108"

><td id="108"><a href="#108">108</a></td></tr
><tr id="gr_svn465_109"

><td id="109"><a href="#109">109</a></td></tr
><tr id="gr_svn465_110"

><td id="110"><a href="#110">110</a></td></tr
><tr id="gr_svn465_111"

><td id="111"><a href="#111">111</a></td></tr
><tr id="gr_svn465_112"

><td id="112"><a href="#112">112</a></td></tr
><tr id="gr_svn465_113"

><td id="113"><a href="#113">113</a></td></tr
><tr id="gr_svn465_114"

><td id="114"><a href="#114">114</a></td></tr
><tr id="gr_svn465_115"

><td id="115"><a href="#115">115</a></td></tr
><tr id="gr_svn465_116"

><td id="116"><a href="#116">116</a></td></tr
><tr id="gr_svn465_117"

><td id="117"><a href="#117">117</a></td></tr
><tr id="gr_svn465_118"

><td id="118"><a href="#118">118</a></td></tr
><tr id="gr_svn465_119"

><td id="119"><a href="#119">119</a></td></tr
><tr id="gr_svn465_120"

><td id="120"><a href="#120">120</a></td></tr
><tr id="gr_svn465_121"

><td id="121"><a href="#121">121</a></td></tr
><tr id="gr_svn465_122"

><td id="122"><a href="#122">122</a></td></tr
><tr id="gr_svn465_123"

><td id="123"><a href="#123">123</a></td></tr
><tr id="gr_svn465_124"

><td id="124"><a href="#124">124</a></td></tr
><tr id="gr_svn465_125"

><td id="125"><a href="#125">125</a></td></tr
><tr id="gr_svn465_126"

><td id="126"><a href="#126">126</a></td></tr
><tr id="gr_svn465_127"

><td id="127"><a href="#127">127</a></td></tr
><tr id="gr_svn465_128"

><td id="128"><a href="#128">128</a></td></tr
><tr id="gr_svn465_129"

><td id="129"><a href="#129">129</a></td></tr
><tr id="gr_svn465_130"

><td id="130"><a href="#130">130</a></td></tr
><tr id="gr_svn465_131"

><td id="131"><a href="#131">131</a></td></tr
><tr id="gr_svn465_132"

><td id="132"><a href="#132">132</a></td></tr
><tr id="gr_svn465_133"

><td id="133"><a href="#133">133</a></td></tr
><tr id="gr_svn465_134"

><td id="134"><a href="#134">134</a></td></tr
><tr id="gr_svn465_135"

><td id="135"><a href="#135">135</a></td></tr
><tr id="gr_svn465_136"

><td id="136"><a href="#136">136</a></td></tr
><tr id="gr_svn465_137"

><td id="137"><a href="#137">137</a></td></tr
><tr id="gr_svn465_138"

><td id="138"><a href="#138">138</a></td></tr
><tr id="gr_svn465_139"

><td id="139"><a href="#139">139</a></td></tr
><tr id="gr_svn465_140"

><td id="140"><a href="#140">140</a></td></tr
><tr id="gr_svn465_141"

><td id="141"><a href="#141">141</a></td></tr
><tr id="gr_svn465_142"

><td id="142"><a href="#142">142</a></td></tr
><tr id="gr_svn465_143"

><td id="143"><a href="#143">143</a></td></tr
><tr id="gr_svn465_144"

><td id="144"><a href="#144">144</a></td></tr
><tr id="gr_svn465_145"

><td id="145"><a href="#145">145</a></td></tr
><tr id="gr_svn465_146"

><td id="146"><a href="#146">146</a></td></tr
><tr id="gr_svn465_147"

><td id="147"><a href="#147">147</a></td></tr
><tr id="gr_svn465_148"

><td id="148"><a href="#148">148</a></td></tr
><tr id="gr_svn465_149"

><td id="149"><a href="#149">149</a></td></tr
><tr id="gr_svn465_150"

><td id="150"><a href="#150">150</a></td></tr
><tr id="gr_svn465_151"

><td id="151"><a href="#151">151</a></td></tr
><tr id="gr_svn465_152"

><td id="152"><a href="#152">152</a></td></tr
><tr id="gr_svn465_153"

><td id="153"><a href="#153">153</a></td></tr
><tr id="gr_svn465_154"

><td id="154"><a href="#154">154</a></td></tr
><tr id="gr_svn465_155"

><td id="155"><a href="#155">155</a></td></tr
><tr id="gr_svn465_156"

><td id="156"><a href="#156">156</a></td></tr
><tr id="gr_svn465_157"

><td id="157"><a href="#157">157</a></td></tr
><tr id="gr_svn465_158"

><td id="158"><a href="#158">158</a></td></tr
><tr id="gr_svn465_159"

><td id="159"><a href="#159">159</a></td></tr
><tr id="gr_svn465_160"

><td id="160"><a href="#160">160</a></td></tr
><tr id="gr_svn465_161"

><td id="161"><a href="#161">161</a></td></tr
><tr id="gr_svn465_162"

><td id="162"><a href="#162">162</a></td></tr
><tr id="gr_svn465_163"

><td id="163"><a href="#163">163</a></td></tr
><tr id="gr_svn465_164"

><td id="164"><a href="#164">164</a></td></tr
><tr id="gr_svn465_165"

><td id="165"><a href="#165">165</a></td></tr
><tr id="gr_svn465_166"

><td id="166"><a href="#166">166</a></td></tr
><tr id="gr_svn465_167"

><td id="167"><a href="#167">167</a></td></tr
><tr id="gr_svn465_168"

><td id="168"><a href="#168">168</a></td></tr
><tr id="gr_svn465_169"

><td id="169"><a href="#169">169</a></td></tr
><tr id="gr_svn465_170"

><td id="170"><a href="#170">170</a></td></tr
><tr id="gr_svn465_171"

><td id="171"><a href="#171">171</a></td></tr
><tr id="gr_svn465_172"

><td id="172"><a href="#172">172</a></td></tr
><tr id="gr_svn465_173"

><td id="173"><a href="#173">173</a></td></tr
><tr id="gr_svn465_174"

><td id="174"><a href="#174">174</a></td></tr
><tr id="gr_svn465_175"

><td id="175"><a href="#175">175</a></td></tr
><tr id="gr_svn465_176"

><td id="176"><a href="#176">176</a></td></tr
><tr id="gr_svn465_177"

><td id="177"><a href="#177">177</a></td></tr
><tr id="gr_svn465_178"

><td id="178"><a href="#178">178</a></td></tr
><tr id="gr_svn465_179"

><td id="179"><a href="#179">179</a></td></tr
><tr id="gr_svn465_180"

><td id="180"><a href="#180">180</a></td></tr
><tr id="gr_svn465_181"

><td id="181"><a href="#181">181</a></td></tr
><tr id="gr_svn465_182"

><td id="182"><a href="#182">182</a></td></tr
><tr id="gr_svn465_183"

><td id="183"><a href="#183">183</a></td></tr
><tr id="gr_svn465_184"

><td id="184"><a href="#184">184</a></td></tr
><tr id="gr_svn465_185"

><td id="185"><a href="#185">185</a></td></tr
><tr id="gr_svn465_186"

><td id="186"><a href="#186">186</a></td></tr
><tr id="gr_svn465_187"

><td id="187"><a href="#187">187</a></td></tr
><tr id="gr_svn465_188"

><td id="188"><a href="#188">188</a></td></tr
><tr id="gr_svn465_189"

><td id="189"><a href="#189">189</a></td></tr
><tr id="gr_svn465_190"

><td id="190"><a href="#190">190</a></td></tr
><tr id="gr_svn465_191"

><td id="191"><a href="#191">191</a></td></tr
><tr id="gr_svn465_192"

><td id="192"><a href="#192">192</a></td></tr
><tr id="gr_svn465_193"

><td id="193"><a href="#193">193</a></td></tr
><tr id="gr_svn465_194"

><td id="194"><a href="#194">194</a></td></tr
><tr id="gr_svn465_195"

><td id="195"><a href="#195">195</a></td></tr
><tr id="gr_svn465_196"

><td id="196"><a href="#196">196</a></td></tr
><tr id="gr_svn465_197"

><td id="197"><a href="#197">197</a></td></tr
><tr id="gr_svn465_198"

><td id="198"><a href="#198">198</a></td></tr
><tr id="gr_svn465_199"

><td id="199"><a href="#199">199</a></td></tr
><tr id="gr_svn465_200"

><td id="200"><a href="#200">200</a></td></tr
><tr id="gr_svn465_201"

><td id="201"><a href="#201">201</a></td></tr
><tr id="gr_svn465_202"

><td id="202"><a href="#202">202</a></td></tr
><tr id="gr_svn465_203"

><td id="203"><a href="#203">203</a></td></tr
><tr id="gr_svn465_204"

><td id="204"><a href="#204">204</a></td></tr
><tr id="gr_svn465_205"

><td id="205"><a href="#205">205</a></td></tr
><tr id="gr_svn465_206"

><td id="206"><a href="#206">206</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn465_1

><td class="source">/**<br></td></tr
><tr
id=sl_svn465_2

><td class="source"> * @license<br></td></tr
><tr
id=sl_svn465_3

><td class="source"> *<br></td></tr
><tr
id=sl_svn465_4

><td class="source"> * Copyright 2011 Google Inc.<br></td></tr
><tr
id=sl_svn465_5

><td class="source"> *<br></td></tr
><tr
id=sl_svn465_6

><td class="source"> * Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);<br></td></tr
><tr
id=sl_svn465_7

><td class="source"> * you may not use this file except in compliance with the License.<br></td></tr
><tr
id=sl_svn465_8

><td class="source"> * You may obtain a copy of the License at<br></td></tr
><tr
id=sl_svn465_9

><td class="source"> *<br></td></tr
><tr
id=sl_svn465_10

><td class="source"> *     http://www.apache.org/licenses/LICENSE-2.0<br></td></tr
><tr
id=sl_svn465_11

><td class="source"> *<br></td></tr
><tr
id=sl_svn465_12

><td class="source"> * Unless required by applicable law or agreed to in writing, software<br></td></tr
><tr
id=sl_svn465_13

><td class="source"> * distributed under the License is distributed on an &quot;AS IS&quot; BASIS,<br></td></tr
><tr
id=sl_svn465_14

><td class="source"> * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.<br></td></tr
><tr
id=sl_svn465_15

><td class="source"> * See the License for the specific language governing permissions and<br></td></tr
><tr
id=sl_svn465_16

><td class="source"> * limitations under the License.<br></td></tr
><tr
id=sl_svn465_17

><td class="source"> */<br></td></tr
><tr
id=sl_svn465_18

><td class="source"><br></td></tr
><tr
id=sl_svn465_19

><td class="source">/**<br></td></tr
><tr
id=sl_svn465_20

><td class="source"> * @fileoverview Map Label.<br></td></tr
><tr
id=sl_svn465_21

><td class="source"> *<br></td></tr
><tr
id=sl_svn465_22

><td class="source"> * @author Luke Mahe (lukem@google.com),<br></td></tr
><tr
id=sl_svn465_23

><td class="source"> *         Chris Broadfoot (cbro@google.com)<br></td></tr
><tr
id=sl_svn465_24

><td class="source"> */<br></td></tr
><tr
id=sl_svn465_25

><td class="source"><br></td></tr
><tr
id=sl_svn465_26

><td class="source">/**<br></td></tr
><tr
id=sl_svn465_27

><td class="source"> * Creates a new Map Label<br></td></tr
><tr
id=sl_svn465_28

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn465_29

><td class="source"> * @extends google.maps.OverlayView<br></td></tr
><tr
id=sl_svn465_30

><td class="source"> * @param {Object.&lt;string, *&gt;=} opt_options Optional properties to set.<br></td></tr
><tr
id=sl_svn465_31

><td class="source"> */<br></td></tr
><tr
id=sl_svn465_32

><td class="source">function MapLabel(opt_options) {<br></td></tr
><tr
id=sl_svn465_33

><td class="source">  this.set(&#39;fontFamily&#39;, &#39;sans-serif&#39;);<br></td></tr
><tr
id=sl_svn465_34

><td class="source">  this.set(&#39;fontSize&#39;, 12);<br></td></tr
><tr
id=sl_svn465_35

><td class="source">  this.set(&#39;fontColor&#39;, &#39;#000000&#39;);<br></td></tr
><tr
id=sl_svn465_36

><td class="source">  this.set(&#39;strokeWeight&#39;, 4);<br></td></tr
><tr
id=sl_svn465_37

><td class="source">  this.set(&#39;strokeColor&#39;, &#39;#ffffff&#39;);<br></td></tr
><tr
id=sl_svn465_38

><td class="source">  this.set(&#39;align&#39;, &#39;center&#39;);<br></td></tr
><tr
id=sl_svn465_39

><td class="source"><br></td></tr
><tr
id=sl_svn465_40

><td class="source">  this.set(&#39;zIndex&#39;, 1e3);<br></td></tr
><tr
id=sl_svn465_41

><td class="source"><br></td></tr
><tr
id=sl_svn465_42

><td class="source">  this.setValues(opt_options);<br></td></tr
><tr
id=sl_svn465_43

><td class="source">}<br></td></tr
><tr
id=sl_svn465_44

><td class="source">MapLabel.prototype = new google.maps.OverlayView;<br></td></tr
><tr
id=sl_svn465_45

><td class="source"><br></td></tr
><tr
id=sl_svn465_46

><td class="source">window[&#39;MapLabel&#39;] = MapLabel;<br></td></tr
><tr
id=sl_svn465_47

><td class="source"><br></td></tr
><tr
id=sl_svn465_48

><td class="source"><br></td></tr
><tr
id=sl_svn465_49

><td class="source">/** @inheritDoc */<br></td></tr
><tr
id=sl_svn465_50

><td class="source">MapLabel.prototype.changed = function(prop) {<br></td></tr
><tr
id=sl_svn465_51

><td class="source">  switch (prop) {<br></td></tr
><tr
id=sl_svn465_52

><td class="source">    case &#39;fontFamily&#39;:<br></td></tr
><tr
id=sl_svn465_53

><td class="source">    case &#39;fontSize&#39;:<br></td></tr
><tr
id=sl_svn465_54

><td class="source">    case &#39;fontColor&#39;:<br></td></tr
><tr
id=sl_svn465_55

><td class="source">    case &#39;strokeWeight&#39;:<br></td></tr
><tr
id=sl_svn465_56

><td class="source">    case &#39;strokeColor&#39;:<br></td></tr
><tr
id=sl_svn465_57

><td class="source">    case &#39;align&#39;:<br></td></tr
><tr
id=sl_svn465_58

><td class="source">    case &#39;text&#39;:<br></td></tr
><tr
id=sl_svn465_59

><td class="source">      return this.drawCanvas_();<br></td></tr
><tr
id=sl_svn465_60

><td class="source">    case &#39;maxZoom&#39;:<br></td></tr
><tr
id=sl_svn465_61

><td class="source">    case &#39;minZoom&#39;:<br></td></tr
><tr
id=sl_svn465_62

><td class="source">    case &#39;position&#39;:<br></td></tr
><tr
id=sl_svn465_63

><td class="source">      return this.draw();<br></td></tr
><tr
id=sl_svn465_64

><td class="source">  }<br></td></tr
><tr
id=sl_svn465_65

><td class="source">};<br></td></tr
><tr
id=sl_svn465_66

><td class="source"><br></td></tr
><tr
id=sl_svn465_67

><td class="source">/**<br></td></tr
><tr
id=sl_svn465_68

><td class="source"> * Draws the label to the canvas 2d context.<br></td></tr
><tr
id=sl_svn465_69

><td class="source"> * @private<br></td></tr
><tr
id=sl_svn465_70

><td class="source"> */<br></td></tr
><tr
id=sl_svn465_71

><td class="source">MapLabel.prototype.drawCanvas_ = function() {<br></td></tr
><tr
id=sl_svn465_72

><td class="source">  var canvas = this.canvas_;<br></td></tr
><tr
id=sl_svn465_73

><td class="source">  if (!canvas) return;<br></td></tr
><tr
id=sl_svn465_74

><td class="source"><br></td></tr
><tr
id=sl_svn465_75

><td class="source">  var style = canvas.style;<br></td></tr
><tr
id=sl_svn465_76

><td class="source">  style.zIndex = /** @type number */(this.get(&#39;zIndex&#39;));<br></td></tr
><tr
id=sl_svn465_77

><td class="source"><br></td></tr
><tr
id=sl_svn465_78

><td class="source">  var ctx = canvas.getContext(&#39;2d&#39;);<br></td></tr
><tr
id=sl_svn465_79

><td class="source">  ctx.clearRect(0, 0, canvas.width, canvas.height);<br></td></tr
><tr
id=sl_svn465_80

><td class="source">  ctx.strokeStyle = this.get(&#39;strokeColor&#39;);<br></td></tr
><tr
id=sl_svn465_81

><td class="source">  ctx.fillStyle = this.get(&#39;fontColor&#39;);<br></td></tr
><tr
id=sl_svn465_82

><td class="source">  ctx.font = this.get(&#39;fontSize&#39;) + &#39;px &#39; + this.get(&#39;fontFamily&#39;);<br></td></tr
><tr
id=sl_svn465_83

><td class="source"><br></td></tr
><tr
id=sl_svn465_84

><td class="source">  var strokeWeight = Number(this.get(&#39;strokeWeight&#39;));<br></td></tr
><tr
id=sl_svn465_85

><td class="source"><br></td></tr
><tr
id=sl_svn465_86

><td class="source">  var text = this.get(&#39;text&#39;);<br></td></tr
><tr
id=sl_svn465_87

><td class="source">  if (text) {<br></td></tr
><tr
id=sl_svn465_88

><td class="source">    if (strokeWeight) {<br></td></tr
><tr
id=sl_svn465_89

><td class="source">      ctx.lineWidth = strokeWeight;<br></td></tr
><tr
id=sl_svn465_90

><td class="source">      ctx.strokeText(text, strokeWeight, strokeWeight);<br></td></tr
><tr
id=sl_svn465_91

><td class="source">    }<br></td></tr
><tr
id=sl_svn465_92

><td class="source"><br></td></tr
><tr
id=sl_svn465_93

><td class="source">    ctx.fillText(text, strokeWeight, strokeWeight);<br></td></tr
><tr
id=sl_svn465_94

><td class="source"><br></td></tr
><tr
id=sl_svn465_95

><td class="source">    var textMeasure = ctx.measureText(text);<br></td></tr
><tr
id=sl_svn465_96

><td class="source">    var textWidth = textMeasure.width + strokeWeight;<br></td></tr
><tr
id=sl_svn465_97

><td class="source">    style.marginLeft = this.getMarginLeft_(textWidth) + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn465_98

><td class="source">    // Bring actual text top in line with desired latitude.<br></td></tr
><tr
id=sl_svn465_99

><td class="source">    // Cheaper than calculating height of text.<br></td></tr
><tr
id=sl_svn465_100

><td class="source">    style.marginTop = &#39;-0.4em&#39;;<br></td></tr
><tr
id=sl_svn465_101

><td class="source">  }<br></td></tr
><tr
id=sl_svn465_102

><td class="source">};<br></td></tr
><tr
id=sl_svn465_103

><td class="source"><br></td></tr
><tr
id=sl_svn465_104

><td class="source">/**<br></td></tr
><tr
id=sl_svn465_105

><td class="source"> * @inheritDoc<br></td></tr
><tr
id=sl_svn465_106

><td class="source"> */<br></td></tr
><tr
id=sl_svn465_107

><td class="source">MapLabel.prototype.onAdd = function() {<br></td></tr
><tr
id=sl_svn465_108

><td class="source">  var canvas = this.canvas_ = document.createElement(&#39;canvas&#39;);<br></td></tr
><tr
id=sl_svn465_109

><td class="source">  var style = canvas.style;<br></td></tr
><tr
id=sl_svn465_110

><td class="source">  style.position = &#39;absolute&#39;;<br></td></tr
><tr
id=sl_svn465_111

><td class="source"><br></td></tr
><tr
id=sl_svn465_112

><td class="source">  var ctx = canvas.getContext(&#39;2d&#39;);<br></td></tr
><tr
id=sl_svn465_113

><td class="source">  ctx.lineJoin = &#39;round&#39;;<br></td></tr
><tr
id=sl_svn465_114

><td class="source">  ctx.textBaseline = &#39;top&#39;;<br></td></tr
><tr
id=sl_svn465_115

><td class="source"><br></td></tr
><tr
id=sl_svn465_116

><td class="source">  this.drawCanvas_();<br></td></tr
><tr
id=sl_svn465_117

><td class="source"><br></td></tr
><tr
id=sl_svn465_118

><td class="source">  var panes = this.getPanes();<br></td></tr
><tr
id=sl_svn465_119

><td class="source">  if (panes) {<br></td></tr
><tr
id=sl_svn465_120

><td class="source">    panes.mapPane.appendChild(canvas);<br></td></tr
><tr
id=sl_svn465_121

><td class="source">  }<br></td></tr
><tr
id=sl_svn465_122

><td class="source">};<br></td></tr
><tr
id=sl_svn465_123

><td class="source">MapLabel.prototype[&#39;onAdd&#39;] = MapLabel.prototype.onAdd;<br></td></tr
><tr
id=sl_svn465_124

><td class="source"><br></td></tr
><tr
id=sl_svn465_125

><td class="source">/**<br></td></tr
><tr
id=sl_svn465_126

><td class="source"> * Gets the appropriate margin-left for the canvas.<br></td></tr
><tr
id=sl_svn465_127

><td class="source"> * @private<br></td></tr
><tr
id=sl_svn465_128

><td class="source"> * @param {number} textWidth  the width of the text, in pixels.<br></td></tr
><tr
id=sl_svn465_129

><td class="source"> * @return {number} the margin-left, in pixels.<br></td></tr
><tr
id=sl_svn465_130

><td class="source"> */<br></td></tr
><tr
id=sl_svn465_131

><td class="source">MapLabel.prototype.getMarginLeft_ = function(textWidth) {<br></td></tr
><tr
id=sl_svn465_132

><td class="source">  switch (this.get(&#39;align&#39;)) {<br></td></tr
><tr
id=sl_svn465_133

><td class="source">    case &#39;left&#39;:<br></td></tr
><tr
id=sl_svn465_134

><td class="source">      return 0;<br></td></tr
><tr
id=sl_svn465_135

><td class="source">    case &#39;right&#39;:<br></td></tr
><tr
id=sl_svn465_136

><td class="source">      return -textWidth;<br></td></tr
><tr
id=sl_svn465_137

><td class="source">  }<br></td></tr
><tr
id=sl_svn465_138

><td class="source">  return textWidth / -2;<br></td></tr
><tr
id=sl_svn465_139

><td class="source">};<br></td></tr
><tr
id=sl_svn465_140

><td class="source"><br></td></tr
><tr
id=sl_svn465_141

><td class="source">/**<br></td></tr
><tr
id=sl_svn465_142

><td class="source"> * @inheritDoc<br></td></tr
><tr
id=sl_svn465_143

><td class="source"> */<br></td></tr
><tr
id=sl_svn465_144

><td class="source">MapLabel.prototype.draw = function() {<br></td></tr
><tr
id=sl_svn465_145

><td class="source">  var projection = this.getProjection();<br></td></tr
><tr
id=sl_svn465_146

><td class="source"><br></td></tr
><tr
id=sl_svn465_147

><td class="source">  if (!projection) {<br></td></tr
><tr
id=sl_svn465_148

><td class="source">    // The map projection is not ready yet so do nothing<br></td></tr
><tr
id=sl_svn465_149

><td class="source">    return;<br></td></tr
><tr
id=sl_svn465_150

><td class="source">  }<br></td></tr
><tr
id=sl_svn465_151

><td class="source"><br></td></tr
><tr
id=sl_svn465_152

><td class="source">  if (!this.canvas_) {<br></td></tr
><tr
id=sl_svn465_153

><td class="source">    // onAdd has not been called yet.<br></td></tr
><tr
id=sl_svn465_154

><td class="source">    return;<br></td></tr
><tr
id=sl_svn465_155

><td class="source">  }<br></td></tr
><tr
id=sl_svn465_156

><td class="source"><br></td></tr
><tr
id=sl_svn465_157

><td class="source">  var latLng = /** @type {google.maps.LatLng} */ (this.get(&#39;position&#39;));<br></td></tr
><tr
id=sl_svn465_158

><td class="source">  if (!latLng) {<br></td></tr
><tr
id=sl_svn465_159

><td class="source">    return;<br></td></tr
><tr
id=sl_svn465_160

><td class="source">  }<br></td></tr
><tr
id=sl_svn465_161

><td class="source">  var pos = projection.fromLatLngToDivPixel(latLng);<br></td></tr
><tr
id=sl_svn465_162

><td class="source"><br></td></tr
><tr
id=sl_svn465_163

><td class="source">  var style = this.canvas_.style;<br></td></tr
><tr
id=sl_svn465_164

><td class="source"><br></td></tr
><tr
id=sl_svn465_165

><td class="source">  style[&#39;top&#39;] = pos.y + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn465_166

><td class="source">  style[&#39;left&#39;] = pos.x + &#39;px&#39;;<br></td></tr
><tr
id=sl_svn465_167

><td class="source"><br></td></tr
><tr
id=sl_svn465_168

><td class="source">  style[&#39;visibility&#39;] = this.getVisible_();<br></td></tr
><tr
id=sl_svn465_169

><td class="source">};<br></td></tr
><tr
id=sl_svn465_170

><td class="source">MapLabel.prototype[&#39;draw&#39;] = MapLabel.prototype.draw;<br></td></tr
><tr
id=sl_svn465_171

><td class="source"><br></td></tr
><tr
id=sl_svn465_172

><td class="source">/**<br></td></tr
><tr
id=sl_svn465_173

><td class="source"> * Get the visibility of the label.<br></td></tr
><tr
id=sl_svn465_174

><td class="source"> * @private<br></td></tr
><tr
id=sl_svn465_175

><td class="source"> * @return {string} blank string if visible, &#39;hidden&#39; if invisible.<br></td></tr
><tr
id=sl_svn465_176

><td class="source"> */<br></td></tr
><tr
id=sl_svn465_177

><td class="source">MapLabel.prototype.getVisible_ = function() {<br></td></tr
><tr
id=sl_svn465_178

><td class="source">  var minZoom = /** @type number */(this.get(&#39;minZoom&#39;));<br></td></tr
><tr
id=sl_svn465_179

><td class="source">  var maxZoom = /** @type number */(this.get(&#39;maxZoom&#39;));<br></td></tr
><tr
id=sl_svn465_180

><td class="source"><br></td></tr
><tr
id=sl_svn465_181

><td class="source">  if (minZoom === undefined &amp;&amp; maxZoom === undefined) {<br></td></tr
><tr
id=sl_svn465_182

><td class="source">    return &#39;&#39;;<br></td></tr
><tr
id=sl_svn465_183

><td class="source">  }<br></td></tr
><tr
id=sl_svn465_184

><td class="source"><br></td></tr
><tr
id=sl_svn465_185

><td class="source">  var map = this.getMap();<br></td></tr
><tr
id=sl_svn465_186

><td class="source">  if (!map) {<br></td></tr
><tr
id=sl_svn465_187

><td class="source">    return &#39;&#39;;<br></td></tr
><tr
id=sl_svn465_188

><td class="source">  }<br></td></tr
><tr
id=sl_svn465_189

><td class="source"><br></td></tr
><tr
id=sl_svn465_190

><td class="source">  var mapZoom = map.getZoom();<br></td></tr
><tr
id=sl_svn465_191

><td class="source">  if (mapZoom &lt; minZoom || mapZoom &gt; maxZoom) {<br></td></tr
><tr
id=sl_svn465_192

><td class="source">    return &#39;hidden&#39;;<br></td></tr
><tr
id=sl_svn465_193

><td class="source">  }<br></td></tr
><tr
id=sl_svn465_194

><td class="source">  return &#39;&#39;;<br></td></tr
><tr
id=sl_svn465_195

><td class="source">};<br></td></tr
><tr
id=sl_svn465_196

><td class="source"><br></td></tr
><tr
id=sl_svn465_197

><td class="source">/**<br></td></tr
><tr
id=sl_svn465_198

><td class="source"> * @inheritDoc<br></td></tr
><tr
id=sl_svn465_199

><td class="source"> */<br></td></tr
><tr
id=sl_svn465_200

><td class="source">MapLabel.prototype.onRemove = function() {<br></td></tr
><tr
id=sl_svn465_201

><td class="source">  var canvas = this.canvas_;<br></td></tr
><tr
id=sl_svn465_202

><td class="source">  if (canvas &amp;&amp; canvas.parentNode) {<br></td></tr
><tr
id=sl_svn465_203

><td class="source">    canvas.parentNode.removeChild(canvas);<br></td></tr
><tr
id=sl_svn465_204

><td class="source">  }<br></td></tr
><tr
id=sl_svn465_205

><td class="source">};<br></td></tr
><tr
id=sl_svn465_206

><td class="source">MapLabel.prototype[&#39;onRemove&#39;] = MapLabel.prototype.onRemove;<br></td></tr
></table></pre>
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>

 
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
 function gutterOver(num) {
 gutterOut();
 var newTR = document.getElementById('gr_svn465_' + num);
 if (newTR) {
 newTR.className = 'undermouse';
 }
 lineNumUnderMouse = num;
 }
 function gutterOut() {
 if (lineNumUnderMouse != -1) {
 var oldTR = document.getElementById(
 'gr_svn465_' + lineNumUnderMouse);
 if (oldTR) {
 oldTR.className = '';
 }
 lineNumUnderMouse = -1;
 }
 }
 var numsGenState = {table_base_id: 'nums_table_'};
 var srcGenState = {table_base_id: 'src_table_'};
 var alignerRunning = false;
 var startOver = false;
 function setLineNumberHeights() {
 if (alignerRunning) {
 startOver = true;
 return;
 }
 numsGenState.chunk_id = 0;
 numsGenState.table = document.getElementById('nums_table_0');
 numsGenState.row_num = 0;
 if (!numsGenState.table) {
 return; // Silently exit if no file is present.
 }
 srcGenState.chunk_id = 0;
 srcGenState.table = document.getElementById('src_table_0');
 srcGenState.row_num = 0;
 alignerRunning = true;
 continueToSetLineNumberHeights();
 }
 function rowGenerator(genState) {
 if (genState.row_num < genState.table.rows.length) {
 var currentRow = genState.table.rows[genState.row_num];
 genState.row_num++;
 return currentRow;
 }
 var newTable = document.getElementById(
 genState.table_base_id + (genState.chunk_id + 1));
 if (newTable) {
 genState.chunk_id++;
 genState.row_num = 0;
 genState.table = newTable;
 return genState.table.rows[0];
 }
 return null;
 }
 var MAX_ROWS_PER_PASS = 1000;
 function continueToSetLineNumberHeights() {
 var rowsInThisPass = 0;
 var numRow = 1;
 var srcRow = 1;
 while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
 numRow = rowGenerator(numsGenState);
 srcRow = rowGenerator(srcGenState);
 rowsInThisPass++;
 if (numRow && srcRow) {
 if (numRow.offsetHeight != srcRow.offsetHeight) {
 numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
 }
 }
 }
 if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
 setTimeout(continueToSetLineNumberHeights, 10);
 } else {
 alignerRunning = false;
 if (startOver) {
 startOver = false;
 setTimeout(setLineNumberHeights, 500);
 }
 }
 }
 function initLineNumberHeights() {
 // Do 2 complete passes, because there can be races
 // between this code and prettify.
 startOver = true;
 setTimeout(setLineNumberHeights, 250);
 window.onresize = setLineNumberHeights;
 }
 initLineNumberHeights();
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta(this); return false">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta(this); return false">Hide details</a>
 </div>
 <div class="ifExpand">
 
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/p/google-maps-utility-library-v3/source/detail?spec=svn465&amp;r=310">r310</a>
 by c...@google.com
 on Jun 19, 2011
 &nbsp; <a href="/p/google-maps-utility-library-v3/source/diff?spec=svn465&r=310&amp;format=side&amp;path=/trunk/maplabel/src/maplabel.js&amp;old_path=/trunk/maplabel/src/maplabel.js&amp;old=300">Diff</a>
 </div>
 <pre>update maplabel</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/p/google-maps-utility-library-v3/source/detail?r=310&spec=svn465';
 var publish_url = '/p/google-maps-utility-library-v3/source/detail?r=310&spec=svn465#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/trunk/maplabel/src/maplabel-compiled.js');
 changed_urls.push('/p/google-maps-utility-library-v3/source/browse/trunk/maplabel/src/maplabel-compiled.js?r\x3d310\x26spec\x3dsvn465');
 
 
 changed_paths.push('/trunk/maplabel/src/maplabel.js');
 changed_urls.push('/p/google-maps-utility-library-v3/source/browse/trunk/maplabel/src/maplabel.js?r\x3d310\x26spec\x3dsvn465');
 
 var selected_path = '/trunk/maplabel/src/maplabel.js';
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>

 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/p/google-maps-utility-library-v3/source/browse/trunk/maplabel/src/maplabel-compiled.js?r=310&amp;spec=svn465"
 
 >...aplabel/src/maplabel-compiled.js</option>
 
 <option value="/p/google-maps-utility-library-v3/source/browse/trunk/maplabel/src/maplabel.js?r=310&amp;spec=svn465"
 selected="selected"
 >/trunk/maplabel/src/maplabel.js</option>
 
 </select>
 </td></tr></table>
 
 
 



 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 
 <div class="closed" style="margin-bottom:3px;" >
 <a class="ifClosed" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/plus.gif" ></a>
 <a class="ifOpened" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/minus.gif" ></a>
 <a href="/p/google-maps-utility-library-v3/source/detail?spec=svn465&r=300">r300</a>
 by lu...@google.com
 on May 23, 2011
 &nbsp; <a href="/p/google-maps-utility-library-v3/source/diff?spec=svn465&r=300&amp;format=side&amp;path=/trunk/maplabel/src/maplabel.js&amp;old_path=/trunk/maplabels/src/maplabel.js&amp;old=296">Diff</a>
 <br>
 <pre class="ifOpened">[No log message]</pre>
 </div>
 
 
 
 <div class="closed" style="margin-bottom:3px;" >
 <a class="ifClosed" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/plus.gif" ></a>
 <a class="ifOpened" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/minus.gif" ></a>
 <a href="/p/google-maps-utility-library-v3/source/detail?spec=svn465&r=296">r296</a>
 by lu...@google.com
 on May 23, 2011
 &nbsp; <a href="/p/google-maps-utility-library-v3/source/diff?spec=svn465&r=296&amp;format=side&amp;path=/trunk/maplabels/src/maplabel.js&amp;old_path=/trunk/maplabels/src/maplabel.js&amp;old=">Diff</a>
 <br>
 <pre class="ifOpened">Initial check in of maplabels</pre>
 </div>
 
 
 <a href="/p/google-maps-utility-library-v3/source/list?path=/trunk/maplabel/src/maplabel.js&start=310">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 4982 bytes,
 206 lines</div>
 
 <div><a href="//google-maps-utility-library-v3.googlecode.com/svn/trunk/maplabel/src/maplabel.js">View raw file</a></div>
 </div>
 
 <div id="props">
 <p>File properties</p>
 <dl>
 
 <dt>svn:executable</dt>
 <dd>*</dd>
 
 <dt>svn:mime-type</dt>
 <dd>text/javascript</dd>
 
 </dl>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>

</div>
</div>

<script src="https://ssl.gstatic.com/codesite/ph/11512667522589661435/js/prettify/prettify.js"></script>
<script type="text/javascript">prettyPrint();</script>


<script src="https://ssl.gstatic.com/codesite/ph/11512667522589661435/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/11512667522589661435/js/kibbles.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initialized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initialized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 var len = elements.length;
 for (var i = 0; i < len; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 }
 </script>
<script src="https://ssl.gstatic.com/codesite/ph/11512667522589661435/js/code_review_scripts.js"></script>
<script type="text/javascript">
 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 var codereviews;
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svn465': '/trunk/maplabel/src/maplabel.js'}
 codereviews = CR_controller.setup(
 {"domainName": null, "relativeBaseUrl": "", "assetHostPath": "https://ssl.gstatic.com/codesite/ph", "loggedInUserEmail": "alex.hills@bgc.bard.edu", "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/11512667522589661435", "token": "9u42vFDyQPuocQcMkxHs-nv8CL8:1394721196763", "projectName": "google-maps-utility-library-v3", "projectHomeUrl": "/p/google-maps-utility-library-v3", "profileUrl": "/u/116088652966931966931/"}, '', 'svn465', paths,
 CR_BrowseIntegrationFactory);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_PUB_PLATE, pubRevealed);
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, draftRevealed);
 codereviews.registerActivityListener(CR_ActivityType.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 var initialized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/11512667522589661435/js/dit_scripts.js"></script>

 
 
 
 <script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/11512667522589661435/js/ph_core.js"></script>
 
 
 
 
</div> 

<div id="footer" dir="ltr">
 <div class="text">
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 </div>
</div>
 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>

 
 


 
 </body>
</html>

