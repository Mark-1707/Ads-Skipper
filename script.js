setInterval(function(){
    let skipButton = document.getElementsByClassName("ytp-ad-skip-button");
    let adsDiv = document.getElementsByTagName("ytd-promoted-sparkles-web-renderer");
    let adsDiv2 = document.getElementsByTagName("ytd-display-ad-renderer");
    let companionAds = document.getElementById("player-ads");
    let bannerAds = document.getElementsByClassName("ytp-ad-overlay-close-button");
    if (skipButton !=undefined && skipButton.length>0){
        console.log("Ads Skipped");
        skipButton[0].click();
    }

    if(adsDiv !=undefined && adsDiv.length>0){
        console.log("Sponsored Skipped");;
        adsDiv[0].remove();
    }

    if(companionAds !=undefined && companionAds.length>0){
        console.log("Companion Ads Removed");
        companionAds[0].remove();
    }

    if(bannerAds !=undefined && bannerAds.length>0){
        console.log("Banner Ads Removed");
        bannerAds[0].click();
    }

    if(adsDiv2 !=undefined && adsDiv2.length>0){
        console.log("Sponsored Skipped");;
        adsDiv2[0].remove();
    }
},1000);