exports.modificationsDom = `
    document.querySelector("#ninzio-footer ").style.visibility = "hidden"
    document.querySelector("#ninzio-footer").style.height = "0px"

    document.querySelector("#back-to-top").style.visibility = "hidden"
    document.querySelector("#back-to-top").style.height = "0px"

    if (document.querySelectorAll("#ninzio-header-mobile > div.container > div > div.logo-mobile-wrapper > div > a > img").length > 0) {
        document.querySelector("#wrapper-container").style.marginTop = "-130px"
    }

    if (document.querySelectorAll(".elementor-spacer").length > 0) {
        document.querySelector("h3").style.marginTop = "-65px"
    }

    if (document.querySelectorAll(".mec-skin-list-events-container").length > 0) {
        document.querySelector("h1").style.marginTop = "-40px"
    }

    if (document.querySelectorAll(".vc_empty_space").length > 0 && !document.querySelectorAll("#main > div:nth-child(6) > div:nth-child(2) > div > div > div.wpb_single_image.wpb_content_element.vc_align_center > figure > div > img").length > 0) {
        document.querySelector("h3").style.marginTop = "-40px"

    }

    if (document.querySelectorAll("div.detail-content > div > div.entry-description.clearfix").length > 0) {

        document.querySelector("#main-container > div > div.col-md-3.col-sm-12.col-xs-12.pull-right").style.visibility = "hidden"
        document.querySelector("#main-container > div > div.col-md-3.col-sm-12.col-xs-12.pull-right").style.height = "0px"

        document.querySelector("#content > div.related-posts > div > div > div > div.owl-controls > div.owl-nav.wp-dark-mode-ignore > div.owl-prev.wp-dark-mode-ignore").style.visibility = "hidden"
        document.querySelector("#content > div.related-posts > div > div > div > div.owl-controls > div.owl-nav.wp-dark-mode-ignore > div.owl-prev.wp-dark-mode-ignore").style.height = "0px"

        document.querySelector("#content > div.related-posts > div > div > div > div.owl-controls > div.owl-nav.wp-dark-mode-ignore > div.owl-next.wp-dark-mode-ignore").style.visibility = "hidden"
        document.querySelector("#content > div.related-posts > div > div > div > div.owl-controls > div.owl-nav.wp-dark-mode-ignore > div.owl-next.wp-dark-mode-ignore").style.height = "0px"
        document.querySelector("#ninzio_socials_widget-2").style.visibility = "hidden"
        document.querySelector("#ninzio_socials_widget-2").style.height = "0px"

        document.querySelector("#comments").style.visibility = "hidden"
        document.querySelector("#comments").style.height = "0px"

        document.querySelector("div.related-posts").style.visibility = "hidden"
        document.querySelector("div.related-posts").style.height = "0px"

        document.querySelector("#content > nav").style.visibility = "hidden"
        document.querySelector("#content > nav").style.height = "0px"

        document.querySelector("div.entry-info > h4").style.fontSize = "24px";
        document.querySelector("div.entry-info > h4").style.lineHeight = "34px";
        document.querySelector("div.entry-info > h4").style.color = "#676767";
        document.querySelector("div.entry-info > h4").style.fontWeight = "500";
        document.querySelector("div.detail-content > div > div.entry-description.clearfix").style.fontSize = "18px";
        document.querySelector("div.detail-content > div > div.entry-description.clearfix").style.lineHeight = "28px";
        document.querySelector("div.detail-content > div > div.entry-description.clearfix").style.color = "#676767";
        document.querySelector("div.detail-content > div > div.entry-description.clearfix").style.fontWeight = "500";

        document.querySelector("div.detail-content > div > div.social-share > div > ul > strong").innerText = "COMPARTILHE ESTA POSTAGEM:"

    }
`
