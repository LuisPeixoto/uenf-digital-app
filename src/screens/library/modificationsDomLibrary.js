exports.modificationsDom = `
    if (document.querySelectorAll("body > table:nth-child(4) > tbody > tr").length > 2) {
        document.querySelector("body > table:nth-child(4)").border = "0"
        document.querySelector("body > table:nth-child(4)").style.backgroundColor = "#f0f0f0"
        document.querySelector("body > table:nth-child(4)").style.padding = "15px"
        document.querySelector("body > table:nth-child(4)").style.borderRadius = "5px"

        document.querySelector("body > table:nth-child(1) > tbody > tr > td:nth-child(2)").style.visibility = "hidden"
        document.querySelector("body > table:nth-child(2) > tbody > tr > td:nth-child(2)").style.visibility = "hidden"

        document.querySelector("body > table:nth-child(2) > tbody > tr > td:nth-child(1) > font > strong").style.color = "#7EBF83"
        document.querySelector("body > table:nth-child(2) > tbody > tr > td:nth-child(1) > font > strong").style.fontSize = "18px"
        document.querySelector("body > table:nth-child(2) > tbody > tr > td:nth-child(1) > font > strong").style.lineHeight = "28px"
        document.querySelector("body > table:nth-child(2) > tbody > tr > td:nth-child(1) > font > strong").style.fontWeight = "500"

        document.querySelector("body > table:nth-child(4) > tbody > tr:nth-child(2) > td").style.color = "#676767"
        document.querySelector("body > table:nth-child(4) > tbody > tr:nth-child(2) > td").style.fontSize = "16px"
        document.querySelector("body > table:nth-child(4) > tbody > tr:nth-child(2) > td").style.fontWeight = "300"

        document.querySelector("body > table:nth-child(4) > tbody > tr:nth-child(3) > td").style.color = "#676767"
        document.querySelector("body > table:nth-child(4) > tbody > tr:nth-child(3) > td").style.fontSize = "16px"
        document.querySelector("body > table:nth-child(4) > tbody > tr:nth-child(3) > td").style.fontWeight = "300"

    }
    if (document.querySelectorAll("body > form > div > p:nth-child(2) > font > table > tbody > tr:nth-child(2) > td > table:nth-child(5) > tbody > tr > td > font > strong > a").length > 0) {

        var listItemsPerio = document.querySelectorAll("body > form > div > p:nth-child(2) > font > table > tbody > tr > td")
        var listItemsTextTitle = document.querySelectorAll("body > form > div > p:nth-child(2) > font > table > tbody > tr > td > font:nth-child(2)")
        var listItemsTextUnid = document.querySelectorAll("body > form > div > p:nth-child(2) > font > table > tbody > tr > td > font:nth-child(3)")
        var listItemsTextCol = document.querySelectorAll("body > form > div > p:nth-child(2) > font > table > tbody > tr > td > table:nth-child(1) > tbody > tr > td:nth-child(2) > font > strong > a > font")
        var listItemsTextSup = document.querySelectorAll("body > form > div > p:nth-child(2) > font > table > tbody > tr > td > table:nth-child(5) > tbody > tr > td > font > strong > a > font")
        var listItemsTextNum = document.querySelectorAll("body > form > div > p:nth-child(2) > font > table > tbody > tr > td > table:nth-child(1) > tbody > tr > td:nth-child(1) > a > font > strong")
        var listItemsTextPrint = document.querySelectorAll("body > form > div > p:nth-child(2) > font > table > tbody > tr > td > table:nth-child(1) > tbody > tr > td:nth-child(1) > b > font")
        var listItemsInputPrint = document.querySelectorAll("body > form > div > p:nth-child(2) > font > table > tbody > tr > td > table:nth-child(1) > tbody > tr > td:nth-child(1) > input[type=checkbox]")

        for (var items = 0; items < listItemsPerio.length; items++) {
            listItemsPerio[items].style.border = "none"
            listItemsPerio[items].style.borderBottom = "1px solid #ccc"
            listItemsPerio[items].style.padding = "5px"

            listItemsTextTitle[items].style.color = "#676767"
            listItemsTextTitle[items].style.fontSize = "16px"
            listItemsTextTitle[items].style.lineHeight = "26px"
            listItemsTextTitle[items].style.fontWeight = "300"

            listItemsTextUnid[items].style.color = "#676767"
            listItemsTextUnid[items].style.fontSize = "16px"
            listItemsTextUnid[items].style.lineHeight = "26px"
            listItemsTextUnid[items].style.fontWeight = "300"

            listItemsTextCol[items].style.color = "#7EBF83"
            listItemsTextCol[items].style.fontSize = "16px"
            listItemsTextCol[items].style.lineHeight = "26px"

            listItemsTextSup[items].style.color = "#7EBF83"
            listItemsTextSup[items].style.fontSize = "16px"
            listItemsTextSup[items].style.lineHeight = "26px"

            listItemsTextNum[items].style.color = "#7EBF83"
            listItemsTextNum[items].style.fontSize = "16px"
            listItemsTextNum[items].style.lineHeight = "26px"

            listItemsTextPrint[items].style.visibility = "hidden"
            listItemsInputPrint[items].style.visibility = "hidden"
        }
    }

    document.body.style.width = "40%";
    if (document.querySelectorAll("body > table > tbody > tr > td:nth-child(2) > div").length > 0 || document.querySelectorAll("body > table > tbody > tr > td:nth-child(2) > div > img").length > 0) {

        document.querySelector("body > table > tbody > tr > td:nth-child(2) > div").style.visibility = "hidden"
        document.body.style.padding = "20px";
        document.querySelector('strong font').style.color = "#676767";
        document.querySelector('td strong font').style.fontSize = "24px";
        document.querySelector('font').style.fontFamily = "roboto";

        document.querySelector('p font').style.color = "#7EBF83";
        document.querySelector('p font').style.fontSize = "18px";
        document.querySelector('p font').style.fontWeight = "300";

        if (document.querySelectorAll("body > table:nth-child(1) > tbody > tr > td:nth-child(2) > div > img").length > 0 && document.querySelectorAll("body > font > strong").length > 0 && document.querySelectorAll("body > table:nth-child(3) > tbody > tr > td > font > a > strong").length > 0) {
            document.body.style.padding = "0px";
            document.querySelector("body > table:nth-child(3) > tbody > tr > td > font > a > strong").style.visibility = "hidden"
        }

        if (document.querySelectorAll("body > table:nth-child(1) > tbody > tr > td:nth-child(2) > div > img").length > 0 && document.querySelectorAll("body > form > table > tbody > tr > td > input:nth-child(1)").length > 0) {
            document.querySelector("body > table:nth-child(1) > tbody > tr > td:nth-child(2) > div").style.visibility = "hidden"
            document.querySelector("body > table:nth-child(3) > tbody > tr > td").style.visibility = "hidden"
            document.querySelector("body > form > table > tbody > tr > td > input:nth-child(1)").style.visibility = "hidden"
            document.querySelector("body > form > table > tbody > tr > td > input:nth-child(2)").style.visibility = "hidden"
            document.querySelector("body > font > b").style.fontSize = "24px";
            document.querySelector("body > font > b").style.color = "#7EBF83";
            document.querySelector("body > font > b").style.fontWeight = "300";
            document.querySelector("body > font").style.marginTop = "-30px"
            document.querySelector("body > font").style.fontSize = "18px";
            document.querySelector("body > p > font").style.visibility = "hidden"
        }


        if (document.querySelectorAll("body > font > form > pre > font > input[type=text]:nth-child(2)").length > 0) {
            document.body.style.padding = "5px";
            document.querySelector("body > table:nth-child(3) > tbody > tr > td:nth-child(2)").style.visibility = "hidden"
            document.querySelector("body > p > font > font").style.fontSize = "18px"
            document.querySelector("body > p > font > font").style.color = "#676767"

            document.querySelector("body > font > form > pre > font > strong:nth-child(1)").style.fontSize = "18px";
            document.querySelector("body > font > form > pre > font > strong:nth-child(1)").style.color = "#676767";
            document.querySelector("body > font > form > pre > font > strong:nth-child(1)").style.fontWeight = "300";

            document.querySelector("body > font > form > pre > font > strong:nth-child(4)").style.fontSize = "18px";
            document.querySelector("body > font > form > pre > font > strong:nth-child(4)").style.color = "#676767";
            document.querySelector("body > font > form > pre > font > strong:nth-child(4)").style.fontWeight = "300";

            document.querySelector("body > font > form > pre > font > strong:nth-child(7)").style.fontSize = "18px";
            document.querySelector("body > font > form > pre > font > strong:nth-child(7)").style.color = "#676767";
            document.querySelector("body > font > form > pre > font > strong:nth-child(7)").style.fontWeight = "300";

            document.querySelector("body > font > form > pre > font > strong:nth-child(10)").style.fontSize = "18px";
            document.querySelector("body > font > form > pre > font > strong:nth-child(10)").style.color = "#676767";
            document.querySelector("body > font > form > pre > font > strong:nth-child(10)").style.fontWeight = "300";

            document.querySelector("body > font > form > pre > font > strong:nth-child(13)").style.fontSize = "18px";
            document.querySelector("body > font > form > pre > font > strong:nth-child(13)").style.color = "#676767";
            document.querySelector("body > font > form > pre > font > strong:nth-child(13)").style.fontWeight = "300";

            document.querySelector("body > font > form > pre > font > strong:nth-child(16)").style.fontSize = "18px";
            document.querySelector("body > font > form > pre > font > strong:nth-child(16)").style.color = "#676767";
            document.querySelector("body > font > form > pre > font > strong:nth-child(16)").style.fontWeight = "300";

            document.querySelector("body > font > form > pre > font").style.color = "#676767"

            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(2)").style.width = "380px";
            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(2)").style.padding = "15px";
            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(2)").style.marginTop = "10px";
            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(2)").style.marginBottom = "10px";
            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(2)").style.border = "none";
            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(2)").style.borderRadius = "5px";
            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(2)").style.backgroundColor = "#F1F1F1";

            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(5)").style.width = "380px";
            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(5)").style.padding = "15px";
            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(5)").style.marginTop = "10px";
            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(5)").style.marginBottom = "10px";
            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(5)").style.border = "none";
            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(5)").style.borderRadius = "5px";
            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(5)").style.backgroundColor = "#F1F1F1";

            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(8)").style.width = "275px";
            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(8)").style.padding = "15px";
            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(8)").style.marginTop = "10px";
            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(8)").style.marginBottom = "10px";
            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(8)").style.border = "none";
            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(8)").style.borderRadius = "5px";
            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(8)").style.backgroundColor = "#F1F1F1";

            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(11)").style.width = "380px";
            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(11)").style.padding = "15px";
            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(11)").style.marginTop = "10px";
            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(11)").style.marginBottom = "10px";
            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(11)").style.border = "none";
            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(11)").style.borderRadius = "5px";
            document.querySelector("body > font > form > pre > font > input[type=text]:nth-child(11)").style.backgroundColor = "#F1F1F1";

            document.querySelector("body > font > form > pre > font > textarea:nth-child(14)").style.width = "380px";
            document.querySelector("body > font > form > pre > font > textarea:nth-child(14)").style.padding = "15px";
            document.querySelector("body > font > form > pre > font > textarea:nth-child(14)").style.marginTop = "10px";
            document.querySelector("body > font > form > pre > font > textarea:nth-child(14)").style.marginBottom = "10px";
            document.querySelector("body > font > form > pre > font > textarea:nth-child(14)").style.border = "none";
            document.querySelector("body > font > form > pre > font > textarea:nth-child(14)").style.borderRadius = "5px";
            document.querySelector("body > font > form > pre > font > textarea:nth-child(14)").style.backgroundColor = "#F1F1F1";


            document.querySelector("body > font > form > pre > font > textarea:nth-child(17)").style.width = "380px";
            document.querySelector("body > font > form > pre > font > textarea:nth-child(17)").style.padding = "15px";
            document.querySelector("body > font > form > pre > font > textarea:nth-child(17)").style.marginTop = "10px";
            document.querySelector("body > font > form > pre > font > textarea:nth-child(17)").style.marginBottom = "10px";
            document.querySelector("body > font > form > pre > font > textarea:nth-child(17)").style.border = "none";
            document.querySelector("body > font > form > pre > font > textarea:nth-child(17)").style.borderRadius = "5px";
            document.querySelector("body > font > form > pre > font > textarea:nth-child(17)").style.backgroundColor = "#F1F1F1";

            document.querySelector("body > font > form > div > input").style.border = "none"
            document.querySelector("body > font > form > div > input").style.fontSize = "18px"
            document.querySelector("body > font > form > div > input").style.fontWeight = "500";
            document.querySelector("body > font > form > div > input").style.fontFamily = "roboto";
            document.querySelector("body > font > form > div > input").style.width = "380px"
            document.querySelector("body > font > form > div > input").style.backgroundColor = "#7EBF83"
            document.querySelector("body > font > form > div > input").style.height = "40px"
            document.querySelector("body > font > form > div > input").style.borderRadius = "5px";
            document.querySelector("body > font > form > div > input").style.border = "node"

            document.querySelector("body > table:nth-child(3)").style.visibility = "hidden"
            document.querySelector("body > p").style.marginTop = "-15px"

        }

        document.querySelector('form').style.backgroundColor = "#fff";
        document.querySelector('form').style.borderRadius = "15px";

        document.querySelector('input[name="matricula"]').style.width = "340px";
        document.querySelector('input[name="matricula"]').style.padding = "15px";
        document.querySelector('input[name="matricula"]').style.marginTop = "10px";
        document.querySelector('input[name="matricula"]').style.marginBottom = "10px";
        document.querySelector('input[name="matricula"]').style.border = "none";
        document.querySelector('input[name="matricula"]').style.borderRadius = "5px";
        document.querySelector('input[name="matricula"]').style.backgroundColor = "#F1F1F1";

        document.querySelector('form tbody tr td font').style.fontSize = "18px";
        document.querySelector('form tbody tr td font').style.color = "#676767";
        document.querySelector('form tbody tr td font').style.fontWeight = "300";

        if (document.querySelectorAll("body > table > tbody > tr > td:nth-child(2) > div > img").length > 0) {
            document.querySelector("body > form > div > p > font").style.visibility = "hidden"

            document.querySelector("body > form > table:nth-child(6) > tbody > tr > td > input[type=password]").style.width = "340px";
            document.querySelector("body > form > table:nth-child(6) > tbody > tr > td > input[type=password]").style.padding = "15px";
            document.querySelector("body > form > table:nth-child(6) > tbody > tr > td > input[type=password]").style.marginTop = "10px";
            document.querySelector("body > form > table:nth-child(6) > tbody > tr > td > input[type=password]").style.marginBottom = "10px";
            document.querySelector("body > form > table:nth-child(6) > tbody > tr > td > input[type=password]").style.border = "none";
            document.querySelector("body > form > table:nth-child(6) > tbody > tr > td > input[type=password]").style.borderRadius = "5px";
            document.querySelector("body > form > table:nth-child(6) > tbody > tr > td > input[type=password]").style.backgroundColor = "#F1F1F1";

            document.querySelector("body > form > table:nth-child(6) > tbody > tr > td > font").style.fontSize = "18px";
            document.querySelector("body > form > table:nth-child(6) > tbody > tr > td > font").style.color = "#676767";
            document.querySelector("body > form > table:nth-child(6) > tbody > tr > td > font").style.fontWeight = "300";

            document.querySelector("body > form > div > p > input").style.border = "none"
            document.querySelector("body > form > div > p > input").style.fontSize = "18px"
            document.querySelector("body > form > div > p > input").style.fontWeight = "500";
            document.querySelector("body > form > div > p > input").style.fontFamily = "roboto";
            document.querySelector("body > form > div > p > input").style.width = "340px"
            document.querySelector("body > form > div > p > input").style.backgroundColor = "#7EBF83"
            document.querySelector("body > form > div > p > input").style.height = "40px"
            document.querySelector("body > form > div > p > input").style.borderRadius = "5px";
            document.querySelector("body > form > div > p > input").style.border = "node"

        }
        document.querySelector("body > form > table:nth-child(7) > tbody > tr > td:nth-child(1) > font").style.fontSize = "15px";
        document.querySelector("body > form > table:nth-child(7) > tbody > tr > td:nth-child(1) > font").style.color = "#676767";
        document.querySelector("body > form > table:nth-child(7) > tbody > tr > td:nth-child(1) > font").style.fontWeight = "300";

        document.querySelector("body > form > table:nth-child(6) > tbody > tr > td > font").style.fontSize = "18px";
        document.querySelector("body > form > table:nth-child(6) > tbody > tr > td > font").style.color = "#676767";
        document.querySelector("body > form > table:nth-child(6) > tbody > tr > td > font").style.fontWeight = "300";


        document.querySelector("body > form > table:nth-child(7) > tbody > tr > td:nth-child(2) > font > select").style.border = "none"
        document.querySelector("body > form > table:nth-child(7) > tbody > tr > td:nth-child(2) > font > select").style.padding = "5px"
        document.querySelector("body > form > table:nth-child(7) > tbody > tr > td:nth-child(2) > font > select").style.borderRadius = "5px";
        document.querySelector("body > form > table:nth-child(7) > tbody > tr > td:nth-child(2) > font > select").style.color = "#757575";

        document.querySelector("body > form > table:nth-child(7) > tbody > tr > td:nth-child(2) > font > select").style.backgroundColor = "#F1F1F1";

        document.querySelector('input[name="senha"]').style.width = "340px";
        document.querySelector('input[name="senha"]').style.padding = "15px";
        document.querySelector('input[name="senha"]').style.marginTop = "10px";
        document.querySelector('input[name="senha"]').style.marginBottom = "10px";

        document.querySelector('input[name="senha"]').style.border = "none";
        document.querySelector('input[name="senha"]').style.borderRadius = "5px";
        document.querySelector('input[name="senha"]').style.backgroundColor = "#F1F1F1";

        document.querySelector('input[type="reset"]').style.visibility = "hidden"

        document.querySelector('input[type="submit"]').style.border = "none"
        document.querySelector('input[type="submit"]').style.fontSize = "18px"
        document.querySelector('input[type="submit"]').style.fontWeight = "500";
        document.querySelector('input[type="submit"]').style.fontFamily = "roboto";
        document.querySelector('input[type="submit"]').style.width = "340px"
        document.querySelector('input[type="submit"]').style.backgroundColor = "#7EBF83"
        document.querySelector('input[type="submit"]').style.height = "40px"
        document.querySelector('input[type="submit"]').style.borderRadius = "5px";
        document.querySelector('input[type="submit"]').style.border = "node"
        document.querySelector('font a strong').style.visibility = "hidden"

    }

    if (document.querySelectorAll("body > font > form > div:nth-child(2) > p:nth-child(8) > font > table > tbody > tr > td:nth-child(1) > p > font").length > 0 || document.querySelectorAll("body > font > form > div:nth-child(2) > p:nth-child(8) > font > strong > em").length > 0) {
        document.querySelector("body > font > table:nth-child(1) > tbody > tr > td:nth-child(1) font").style.color = "#676767"
        document.querySelector("body > font > table:nth-child(1) > tbody > tr > td:nth-child(1) font").style.fontSize = "20px"
        document.querySelector("body > font > table:nth-child(1) > tbody > tr > td:nth-child(1) font").style.lineHeight = "30px"
        document.querySelector("body > font > table:nth-child(1) > tbody > tr > td:nth-child(1) font").style.fontWeight = "300"

        document.querySelector("body > font > table:nth-child(1) > tbody > tr > td:nth-child(2)").style.visibility = "hidden"
        document.querySelector("body > font > table:nth-child(2) > tbody > tr > td:nth-child(2)").style.visibility = "hidden"

        document.querySelector("body > font > table:nth-child(2) > tbody > tr > td:nth-child(1) font").style.color = "#7EBF83"
        document.querySelector("body > font > table:nth-child(2) > tbody > tr > td:nth-child(1) font").style.fontSize = "18px"
        document.querySelector("body > font > table:nth-child(2) > tbody > tr > td:nth-child(1) font").style.fontFamily = "roboto"
        document.querySelector("body > font > table:nth-child(2) > tbody > tr > td:nth-child(1) font").style.lineHeight = "28px"
        document.querySelector("body > font > table:nth-child(2) > tbody > tr > td:nth-child(1) font").style.fontWeight = "300"

        document.querySelector("body > font > table:nth-child(2) > tbody > tr > td:nth-child(1) font font").style.color = "#676767"
        document.querySelector("body > font > table:nth-child(2) > tbody > tr > td:nth-child(1) font font").style.fontSize = "16px"
        document.querySelector("body > font > table:nth-child(2) > tbody > tr > td:nth-child(1) font font").style.lineHeight = "26px"
        document.querySelector("body > font > table:nth-child(2) > tbody > tr > td:nth-child(1) font font").style.fontWeight = "300"

        document.querySelector("body > font > form > div:nth-child(1) > font").style.color = "#7EBF83"
        document.querySelector("body > font > form > div:nth-child(1) > font").style.fontSize = "14px"
        document.querySelector("body > font > form > div:nth-child(1) > font").style.fontFamily = "roboto"
        document.querySelector("body > font > form > div:nth-child(1) > font").style.lineHeight = "24px"
        document.querySelector("body > font > form > div:nth-child(1) > font").style.fontWeight = "300"


        document.querySelector("body > font > form > div:nth-child(1) > input.aceTextField").style.width = "60px";
        document.querySelector("body > font > form > div:nth-child(1) > input.aceTextField").style.color = "#676767";
        document.querySelector("body > font > form > div:nth-child(1) > input.aceTextField").style.padding = "10px";
        document.querySelector("body > font > form > div:nth-child(1) > input.aceTextField").style.border = "none";
        document.querySelector("body > font > form > div:nth-child(1) > input.aceTextField").style.borderRadius = "5px";
        document.querySelector("body > font > form > div:nth-child(1) > input.aceTextField").style.backgroundColor = "#F1F1F1";

        document.querySelector("body > font > form > div:nth-child(1) > input.aceButton").style.border = "none"
        document.querySelector("body > font > form > div:nth-child(1) > input.aceButton").style.fontSize = "12px"
        document.querySelector("body > font > form > div:nth-child(1) > input.aceButton").style.fontWeight = "500";
        document.querySelector("body > font > form > div:nth-child(1) > input.aceButton").style.fontFamily = "roboto";
        document.querySelector("body > font > form > div:nth-child(1) > input.aceButton").style.width = "75px"
        document.querySelector("body > font > form > div:nth-child(1) > input.aceButton").style.backgroundColor = "#7EBF83"
        document.querySelector("body > font > form > div:nth-child(1) > input.aceButton").style.height = "35px"
        document.querySelector("body > font > form > div:nth-child(1) > input.aceButton").style.borderRadius = "5px";

        document.querySelector("body > font > form > div:nth-child(2) > input:nth-child(3)").style.visibility = "hidden"
        document.querySelector("body > font > form > div:nth-child(2) > input:nth-child(4)").style.visibility = "hidden"
        document.querySelector("body > font > form > div:nth-child(2) > font").style.visibility = "hidden"
        document.querySelector("body > font > form > div:nth-child(2) > input.aceTextField").style.visibility = "hidden"
        document.querySelector("body > font > form > div:nth-child(2) > input:nth-child(7)").style.visibility = "hidden"

        document.querySelector("body > font > form > div:nth-child(2) > p:nth-child(8)").style.marginTop = "-25px"
        document.querySelector("body > font > form > div:nth-child(2) > p:nth-child(8)").style.marginTop = "-25px"
        document.querySelector("body > font > form > div:nth-child(2) > p:nth-child(8)").style.color = "#676767"

        document.querySelector("body > font > form > div:nth-child(2) > p:nth-child(8) > font > table > tbody").style.color = "#676767"

        document.querySelector("body > font > form > div:nth-child(2) > p:nth-child(20) > input:nth-child(7)").style.visibility = "hidden"
        document.querySelector("body > font > form > div:nth-child(2) > p:nth-child(20) > input.aceTextField").style.visibility = "hidden"
        document.querySelector("body > font > form > div:nth-child(2) > p:nth-child(20) > font:nth-child(5)").style.visibility = "hidden"
        document.querySelector("body > font > form > div:nth-child(2) > p:nth-child(20) > input:nth-child(4)").style.visibility = "hidden"
        document.querySelector("body > font > form > div:nth-child(2) > p:nth-child(20) > input:nth-child(1)").style.visibility = "hidden"
        document.querySelector("body > font > form > div:nth-child(2) > input:nth-child(1)").style.visibility = "hidden"
        document.querySelector("body > font > form > div:nth-child(2) > input:nth-child(2)").style.visibility = "hidden"

        document.querySelector("body > font > form > div:nth-child(2) > p:nth-child(20) > input:nth-child(3)").style.border = "none"
        document.querySelector("body > font > form > div:nth-child(2) > p:nth-child(20) > input:nth-child(3)").style.fontSize = "12px"
        document.querySelector("body > font > form > div:nth-child(2) > p:nth-child(20) > input:nth-child(3)").style.fontWeight = "500";
        document.querySelector("body > font > form > div:nth-child(2) > p:nth-child(20) > input:nth-child(3)").style.fontFamily = "roboto";
        document.querySelector("body > font > form > div:nth-child(2) > p:nth-child(20) > input:nth-child(3)").style.width = "80px"
        document.querySelector("body > font > form > div:nth-child(2) > p:nth-child(20) > input:nth-child(3)").style.backgroundColor = "#7EBF83"
        document.querySelector("body > font > form > div:nth-child(2) > p:nth-child(20) > input:nth-child(3)").style.height = "40px"
        document.querySelector("body > font > form > div:nth-child(2) > p:nth-child(20) > input:nth-child(3)").style.borderRadius = "5px";

        document.querySelector("body > font > form > div:nth-child(2) > p:nth-child(20) > input:nth-child(2)").style.border = "none"
        document.querySelector("body > font > form > div:nth-child(2) > p:nth-child(20) > input:nth-child(2)").style.fontSize = "12px"
        document.querySelector("body > font > form > div:nth-child(2) > p:nth-child(20) > input:nth-child(2)").style.fontWeight = "500";
        document.querySelector("body > font > form > div:nth-child(2) > p:nth-child(20) > input:nth-child(2)").style.fontFamily = "roboto";
        document.querySelector("body > font > form > div:nth-child(2) > p:nth-child(20) > input:nth-child(2)").style.width = "80px"
        document.querySelector("body > font > form > div:nth-child(2) > p:nth-child(20) > input:nth-child(2)").style.backgroundColor = "#7EBF83"
        document.querySelector("body > font > form > div:nth-child(2) > p:nth-child(20) > input:nth-child(2)").style.height = "40px"
        document.querySelector("body > font > form > div:nth-child(2) > p:nth-child(20) > input:nth-child(2)").style.borderRadius = "5px";
    }

    if (document.querySelectorAll("body > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(1) > font").length) {
        document.body.style.marginTop = "-40px";

        document.querySelector("body > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(1)").style.visibility = "hidden"

        document.querySelector("body > table:nth-child(1) > tbody > tr:nth-child(2) > td > font").style.fontSize = "20px"
        document.querySelector("body > table:nth-child(1) > tbody > tr:nth-child(2) > td > font").style.color = "#676767";
        document.querySelector("body > table:nth-child(1) > tbody > tr:nth-child(2) > td > font").style.fontFamily = "roboto";
        document.querySelector("body > table:nth-child(1) > tbody > tr:nth-child(2) > td > font").style.fontWeight = "300";
        document.querySelector("body > table:nth-child(1) > tbody > tr:nth-child(2) > td").style.marginTop = "10px";

        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(5) > font").style.fontSize = "18px"
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(5) > font").style.color = "#676767";
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(5) > font").style.fontFamily = "roboto";
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(5) > font").style.fontWeight = "300";

        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(5) > font").style.fontSize = "18px"
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(5) > font").style.color = "#676767";
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(5) > font").style.fontFamily = "roboto";
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(5) > font").style.fontWeight = "300";

        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(5) > input.aceTextField").style.width = "50px";
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(5) > input.aceTextField").style.color = "#676767";
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(5) > input.aceTextField").style.padding = "15px";
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(5) > input.aceTextField").style.border = "none";
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(5) > input.aceTextField").style.borderRadius = "5px";
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(5) > input.aceTextField").style.backgroundColor = "#F1F1F1";

        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(5) > input.aceTextField").style.width = "50px";
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(5) > input.aceTextField").style.color = "#676767";
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(5) > input.aceTextField").style.padding = "15px";
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(5) > input.aceTextField").style.border = "none";
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(5) > input.aceTextField").style.borderRadius = "5px";
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(5) > input.aceTextField").style.backgroundColor = "#F1F1F1";

        document.querySelector("body > table:nth-child(2) > tbody > tr > td:nth-child(7)").style.visibility = "hidden"

        document.querySelector("body > table:nth-child(2) > tbody > tr > td:nth-child(6)").style.visibility = "hidden"
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(6)").style.visibility = "hidden"
        document.querySelector("body > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(2)").style.visibility = "hidden"
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(6)").style.visibility = "hidden"

        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(3) > input").style.border = "none"
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(3) > input").style.fontSize = "12px"
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(3) > input").style.fontWeight = "500";
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(3) > input").style.fontFamily = "roboto";
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(3) > input").style.width = "80px"
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(3) > input").style.backgroundColor = "#7EBF83"
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(3) > input").style.height = "40px"
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(3) > input").style.borderRadius = "5px";

        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(4) > input").style.visibility = "hidden"
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(1) > input").style.visibility = "hidden"
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(1) > input").style.visibility = "hidden"

        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(2) > input").style.border = "none"
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(2) > input").style.fontSize = "12px"
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(2) > input").style.fontWeight = "500";
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(2) > input").style.fontFamily = "roboto";
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(2) > input").style.width = "80px"
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(2) > input").style.backgroundColor = "#7EBF83"
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(2) > input").style.height = "40px"
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(2) > input").style.borderRadius = "5px";

        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(2) > input").style.border = "none"
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(2) > input").style.fontSize = "12px"
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(2) > input").style.fontWeight = "500";
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(2) > input").style.fontFamily = "roboto";
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(2) > input").style.width = "80px"
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(2) > input").style.backgroundColor = "#7EBF83"
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(2) > input").style.height = "40px"
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(2) > input").style.borderRadius = "5px";

        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(5) > input.aceButton").style.border = "none"
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(5) > input.aceButton").style.fontSize = "12px"
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(5) > input.aceButton").style.fontWeight = "500";
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(5) > input.aceButton").style.fontFamily = "roboto";
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(5) > input.aceButton").style.width = "30px"
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(5) > input.aceButton").style.backgroundColor = "#7EBF83"
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(5) > input.aceButton").style.height = "40px"
        document.querySelector("body > form > div > table > tbody > tr > td:nth-child(5) > input.aceButton").style.borderRadius = "5px";

        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(3) > input").style.border = "none"
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(3) > input").style.fontSize = "12x"
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(3) > input").style.fontWeight = "500";
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(3) > input").style.fontFamily = "roboto";
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(3) > input").style.width = "80px"
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(3) > input").style.backgroundColor = "#7EBF83"
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(3) > input").style.height = "40px"
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(3) > input").style.borderRadius = "5px";

        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(4) > input").style.visibility = "hidden"

        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(5) > input.aceButton").style.border = "none"
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(5) > input.aceButton").style.fontSize = "12px"
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(5) > input.aceButton").style.fontWeight = "500";
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(5) > input.aceButton").style.fontFamily = "roboto";
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(5) > input.aceButton").style.width = "30px"
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(5) > input.aceButton").style.backgroundColor = "#7EBF83"
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(5) > input.aceButton").style.height = "40px"
        document.querySelector("body > form > div > p:nth-child(15) > table > tbody > tr > td:nth-child(5) > input.aceButton").style.borderRadius = "5px";

        document.querySelector("body > form > div > p:nth-child(2) > font > table > tbody").style.backgroundColor = "#fff"
        document.querySelector("body > form > div > p:nth-child(2) > font > table > tbody").style.borderRadius = "10px"
        document.querySelector("body > form > div > p:nth-child(2) > font > table > tbody").style.border = "none"
        document.querySelector("body > form > div > p:nth-child(2) > font > table").style.border = 'none'
        document.querySelector("body > form > div > p:nth-child(2) > font > table").style.borderRadius = "10px"

        var listBooks = document.querySelectorAll("body > form > div > p:nth-child(2) > font > table > tbody > tr > td")
        var listlinksDisp = document.querySelectorAll("body > form > div > p:nth-child(2) > font > table > tbody > tr > td > font:nth-child(5) > p > a > font > strong")
        var listlinksPrintInput = document.querySelectorAll("body > form > div > p:nth-child(2) > font > table > tbody > tr > td > table > tbody > tr > td:nth-child(1) > input[type=checkbox]")

        var listlinksPrintText = document.querySelectorAll("body > form > div > p:nth-child(2) > font > table > tbody > tr > td > table > tbody > tr > td:nth-child(1) > b > font > strong")
        var listlinksDetails = document.querySelectorAll("body > form > div > p:nth-child(2) > font > table > tbody > tr > td > table > tbody > tr > td:nth-child(2) > font > strong > a")
        var listlinksCount = document.querySelectorAll("body > form > div > p:nth-child(2) > font > table > tbody > tr > td > table > tbody > tr > td:nth-child(1) > a > font > strong")
        var listTextTitle = document.querySelectorAll("body > form > div > p:nth-child(2) > font > table > tbody > tr > td > font:nth-child(2)")
        var listTextDisp = document.querySelectorAll("body > form > div > p:nth-child(2) > font > table > tbody > tr > td > font:nth-child(5) > p")

        for (var Books = 0; Books < 10; Books++) {

            listBooks[Books].style.border = "0.5px solid #fff"
            listBooks[0].style.borderTop = "1px solid #ccc"
            listBooks[Books].style.borderBottom = "1px solid #ccc"

            listlinksDisp[Books].style.color = "#7EBF83"
            listlinksDisp[Books].style.fontSize = "16px"
            listlinksDisp[Books].style.lineHeight = "26px"

            listlinksPrintInput[Books].style.visibility = "hidden"
            listlinksPrintText[Books].style.visibility = "hidden"

            listlinksDetails[Books].style.color = "#7EBF83"
            listlinksDetails[Books].style.fontSize = "16px"
            listlinksDetails[Books].style.lineHeight = "26px"

            listlinksCount[Books].style.color = "#7EBF83"
            listlinksCount[Books].style.fontSize = "16px"
            listlinksCount[Books].style.lineHeight = "26px"

            listTextTitle[Books].style.color = "#676767"
            listTextTitle[Books].style.fontSize = "16px"
            listTextTitle[Books].style.lineHeight = "26px"
            listTextTitle[Books].style.fontWeight = "300"

            listTextDisp[Books].style.color = "#676767"
            listTextDisp[Books].style.fontSize = "14px"
            listTextDisp[Books].style.lineHeight = "24px"
            listTextDisp[Books].style.fontWeight = "300"
        }
    }

    if (document.querySelectorAll("body > font > font > table > tbody > tr > td > p").length > 0) {

        document.querySelector("body > font > font > table > tbody > tr > td").style.border = "none"
        document.querySelector("body > font > font > table").style.border = "none"


        document.querySelector("body > font > font > table").style.backgroundColor = "#f0f0f0"
        document.querySelector("body > font > font > table").style.padding = "15px"
        document.querySelector("body > font > font > table").style.borderRadius = "15px"

        document.querySelector("body > font > font > table > tbody > tr > td > p > font > font").style.color = "#676767"
        document.querySelector("body > font > font > table > tbody > tr > td > p > font > font").style.fontSize = "18px"
        document.querySelector("body > font > font > table > tbody > tr > td > p > font > font").style.lineHeight = "26px"
        document.querySelector("body > font > font > table > tbody > tr > td > p > font > font").style.fontWeight = "300"

        document.querySelector("body > font > table:nth-child(1) > tbody > tr > td:nth-child(2)").style.visibility = "hidden"
        document.querySelector("body > font > table:nth-child(2) > tbody > tr > td:nth-child(2)").style.visibility = "hidden"

        document.querySelector("body > font > table:nth-child(1) > tbody > tr > td:nth-child(1) > font > strong").style.color = "#676767"
        document.querySelector("body > font > table:nth-child(1) > tbody > tr > td:nth-child(1) > font > strong").style.fontSize = "24px"
        document.querySelector("body > font > table:nth-child(1) > tbody > tr > td:nth-child(1) > font > strong").style.lineHeight = "34px"
        document.querySelector("body > font > table:nth-child(1) > tbody > tr > td:nth-child(1) > font > strong").style.fontWeight = "500"

        document.querySelector("body > font > table:nth-child(2) > tbody > tr > td:nth-child(1) > font > strong").style.color = "#7EBF83"
        document.querySelector("body > font > table:nth-child(2) > tbody > tr > td:nth-child(1) > font > strong").style.fontSize = "18px"
        document.querySelector("body > font > table:nth-child(2) > tbody > tr > td:nth-child(1) > font > strong").style.lineHeight = "28px"
        document.querySelector("body > font > table:nth-child(2) > tbody > tr > td:nth-child(1) > font > strong").style.fontWeight = "500"

    }

    document.querySelector('td strong font').style.fontWeight = "500";
    document.querySelector('font').style.fontFamily = "roboto";
    document.body.style.padding = "20px";

    document.querySelector("body > table > tbody > tr > td:nth-child(2) > img").style.visibility = "hidden"
    document.querySelector("body > form > div > p > input:nth-child(2)").style.visibility = "hidden"
    document.querySelector("body > form > div > p > font > a > strong").style.visibility = "hidden"

    document.querySelector("body > table > tbody > tr > td:nth-child(1) > strong > font").style.color = "#676767";

    document.querySelector("body > table > tbody > tr > td:nth-child(1) > strong > font").style.fontSize = "24px";

    document.querySelector("body > table > tbody > tr > td:nth-child(1) > strong > font").style.fontFamily = "roboto";

    document.querySelector("body > form > p > input[type=text]").style.width = "340px";
    document.querySelector("body > form > p > input[type=text]").style.padding = "15px";
    document.querySelector("body > form > p > input[type=text]").style.marginTop = "10px";
    document.querySelector("body > form > p > input[type=text]").style.marginBottom = "10px";
    document.querySelector("body > form > p > input[type=text]").style.border = "none";
    document.querySelector("body > form > p > input[type=text]").style.borderRadius = "5px";
    document.querySelector("body > form > p > input[type=text]").style.backgroundColor = "#F1F1F1";

    document.querySelector("body > font").style.fontSize = "18px";
    document.querySelector("body > font").style.color = "#7EBF83";
    document.querySelector("body > font").style.fontWeight = "300";

    document.querySelector("body > form > p > font").style.fontSize = "18px";
    document.querySelector("body > form > p > font").style.color = "#676767";
    document.querySelector("body > form > p > font").style.fontWeight = "300";

    document.querySelector("body > form > div > p > input:nth-child(1)").style.border = "none";
    document.querySelector("body > form > div > p > input:nth-child(1)").style.fontSize = "18px";
    document.querySelector("body > form > div > p > input:nth-child(1)").style.fontWeight = "500";
    document.querySelector("body > form > div > p > input:nth-child(1)").style.fontFamily = "roboto";
    document.querySelector("body > form > div > p > input:nth-child(1)").style.width = "340px";
    document.querySelector("body > form > div > p > input:nth-child(1)").style.backgroundColor = "#7EBF83";
    document.querySelector("body > form > div > p > input:nth-child(1)").style.height = "40px";
    document.querySelector("body > form > div > p > input:nth-child(1)").style.borderRadius = "5px";
    document.querySelector("body > form > div > p > input:nth-child(1)").style.border = "node";

    document.querySelector("body > form > div > p:nth-child(2) > font > table > tbody").style.backgroundColor = "red"

    document.querySelector("body > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(2) > img").style.visibility = "hidden";

    document.querySelector("body > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(1) > font").style.fontSize = "24px"
`