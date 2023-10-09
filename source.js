class Image {
    constructor (name, imageLink) {
        this.name = name;
        this.imageLink = imageLink;
    }
}

class ImageCategory {
    constructor(name, hint, members) {
        this.name = name;
        this.hint = hint;
        this.members = members;
    }
}

let imageCategories = [
    new ImageCategory("Online", "Oameni care sunt cunoscuti predominant din online", [
        new Image("Mario Simen", "https://i.imgur.com/qe8HgTC.png"),
        new Image("Andreea Balaban", "https://i.imgur.com/VRyWVre.jpg"),
        new Image("Alex Alvarez", "https://i.imgur.com/WEz6Ip2.png"),
        new Image("Chifoi", "https://i.imgur.com/lm9ZdKs.png"),
        new Image("Valin", "https://i.imgur.com/ryrUnL6.png"),
        new Image("Stresu", "https://i.imgur.com/sraUdla.png"),
        new Image("Micky Hash", "https://i.imgur.com/YOGsgxY.png"),
        new Image("Dorian Popa", "https://i.imgur.com/yi9UNcI.jpg"),
        new Image("Dana Budeanu", "https://i.imgur.com/bzOMuWo.png"),
        new Image("Cotofana", "https://i.imgur.com/60Ffe2a.png"),
        new Image("Faiar", "https://i.imgur.com/Vjc7ViC.png"),
        new Image("Cristina Ich", "https://i.imgur.com/E6bBKuD.png"),
        new Image("Bahoi", "https://i.imgur.com/2N8a6Gu.png"),
        new Image("Buhnici", "https://i.imgur.com/v5JZ1VE.png"),
        new Image("Miky Neamtu", "https://i.imgur.com/Whkizpj.png"),
        new Image("Cocolinostar", "https://i.imgur.com/8fiLLTt.jpg"),
        new Image("James Charles", "https://i.imgur.com/VBbdQc6.png"),
        new Image("Diana C", "https://i.imgur.com/jT6LKex.jpg"),
        new Image("Gami", "https://i.imgur.com/WNzF2Y0.jpg"),
        new Image("xLexi7", "https://i.imgur.com/Tz5Z93Z.png"),
        new Image("iRaphahell", "https://i.imgur.com/3kwD11X.png"),
        new Image("Elmurorosa", "https://i.imgur.com/3P6AdHp.png"),
        new Image("Bianca Adam", "https://i.imgur.com/AIdglQZ.jpg"),
        new Image("Zlavog", "https://i.imgur.com/PrXy2pW.png")
    ]),
    new ImageCategory("Animatie", "Personaje din desene animate", [
        new Image("Sanic", "https://i.imgur.com/VQCkZVd.png"),
        new Image("Mo si FOCA", "https://i.imgur.com/lk7kzru.png"),
        new Image("Samurai Jack", "https://i.imgur.com/iedh1yX.png"),
        new Image("Nancy de la 402", "https://i.imgur.com/Mc1xiNA.png"),
        new Image("Tom si Jerry", "https://i.imgur.com/C5XH74G.png"),
        new Image("Ed Edd si Eddy", "https://i.imgur.com/UxyAIDh.png"),
        new Image("Barbie", "https://i.imgur.com/86klTTi.png"),
        new Image("Mojo Jojo", "https://i.imgur.com/txhaPEm.png"),
        new Image("Dexter", "https://i.imgur.com/GoCXCZ7.png"),
        new Image("Bugs Bunny", "https://i.imgur.com/rnSKGtg.png"),
        new Image("Daffy Duck", "https://i.imgur.com/jlezMiV.png"),
        new Image("Finn", "https://i.imgur.com/WGYAZUT.png"),
        new Image("Arthur", "https://i.imgur.com/K2yUxhJ.png"),
        new Image("Pikachu", "https://i.imgur.com/S3KvBSU.png"),
        new Image("Sakura", "https://i.imgur.com/ZRzleIa.png"),
        new Image("Winnie The Pooh", "https://i.imgur.com/Atwz9Em.png"),
        new Image("Fred Flintstone", "https://i.imgur.com/9GSgAFO.png"),
        new Image("George Jetson", "https://i.imgur.com/4qOa73M.png"),
        new Image("Scooby Doo", "https://i.imgur.com/ho6COZU.png"),
        new Image("Homer Simpson", "https://i.imgur.com/MAaROEa.png"),
        new Image("Mickey Mouse", "https://i.imgur.com/QNwkjIC.png"),
        new Image("Cartman", "https://i.imgur.com/LSIqkee.png"),
        new Image("Donald Duck", "https://i.imgur.com/6n0T9DU.png"),
        new Image("Hello Kitty", "https://i.imgur.com/4aKW0gY.png")
    ]),
    new ImageCategory("Vedete", "Oameni care nu sunt cunoscuti predominant din online", [
        new Image("Jasmine Saraj", "https://i.imgur.com/rGLHLTb.png"),
        new Image("Maurice", "https://i.imgur.com/yQZn6dT.png"),
        new Image("Andreea BAS", "https://i.imgur.com/dFArEmo.png"),
        new Image("Raluca Badulescu", "https://i.imgur.com/uhGCzTJ.png"),
        new Image("Bendeac", "https://i.imgur.com/q8bohvp.png"),
        new Image("Dan Diaconescu", "https://i.imgur.com/fYFEkEH.png"),
        new Image("Dan Negru", "https://i.imgur.com/xRW5lOo.png"),
        new Image("Neti Sandu", "https://i.imgur.com/UhSjUyd.png"),
        new Image("Iohannis", "https://i.imgur.com/Iac4C1T.png"),
        new Image("Anamaria Prodan", "https://i.imgur.com/K8cocgF.jpg"),
        new Image("RuPaul", "https://i.imgur.com/Kez5cZZ.png"),
        new Image("Ozana Barabancea", "https://i.imgur.com/8U43Csh.png"),
        new Image("Catalin Maruta", "https://i.imgur.com/8aREaw3.png"),
        new Image("Andreea Tonciu", "https://i.imgur.com/sq08yOv.png"),
        new Image("CTP", "https://i.imgur.com/EKt2gGi.png"),
        new Image("Adrian Mutu", "https://i.imgur.com/xquErd4.png"),
        new Image("Viorel Lis", "https://i.imgur.com/gulZ9RD.png"),
        new Image("Catalin Scarlatescu", "https://i.imgur.com/wrBJG2g.png"),
        new Image("Becali", "https://i.imgur.com/CwpfhZT.png"),
        new Image("Andreea Esca", "https://i.imgur.com/l56IQSf.png"),
        new Image("Busu", "https://i.imgur.com/XSpFwbf.png"),
        new Image("Teo Trandafir", "https://i.imgur.com/8Uj6uj8.png"),
        new Image("Mircea Badea", "https://i.imgur.com/aGzgFF5.png"),
        new Image("Pavel Bartos", "https://i.imgur.com/LUOsWjh.png")
    ]),
    new ImageCategory("Cantareti", "Oameni care castiga bani din tralalala", [
        new Image("Smiley", "https://i.imgur.com/MYEfhwc.png"),
        new Image("CRBL", "https://i.imgur.com/9XzilbQ.png"),
        new Image("Alex Velea", "https://i.imgur.com/y9BdgwQ.png"),
        new Image("Loredana Groza", "https://i.imgur.com/FbtehwE.png"),
        new Image("Tzanca Uraganu", "https://i.imgur.com/0bfn6zq.png"),
        new Image("Puya", "https://i.imgur.com/0MGUt9n.png"),
        new Image("Delia", "https://i.imgur.com/4Exw9lQ.png"),
        new Image("Enceanu", "https://i.imgur.com/iUyutgk.png"),
        new Image("Irina Rimes", "https://i.imgur.com/cOrCxHp.png"),
        new Image("Carla's Dreams", "https://i.imgur.com/NKOeW9p.png"),
        new Image("Rihanna", "https://i.imgur.com/yQavbuo.png"),
        new Image("Beyonce", "https://i.imgur.com/iPT2kjl.png"),
        new Image("Ariana Grande", "https://i.imgur.com/XqH18Dh.png"),
        new Image("Cardi B", "https://i.imgur.com/IbF0STc.png"),
        new Image("The Weeknd", "https://i.imgur.com/jAc6zkx.png"),
        new Image("Olivia Rodrigo", "https://i.imgur.com/W7dOEUt.png"),
        new Image("Drake", "https://i.imgur.com/hMVvUuc.png"),
        new Image("Nicole Cherry", "https://i.imgur.com/jgjnWT3.png"),
        new Image("Inna", "https://i.imgur.com/iSGkoAf.png"),
        new Image("Andra", "https://i.imgur.com/FxvzaFH.png"),
        new Image("Ruby", "https://i.imgur.com/WfY3rBt.png"),
        new Image("Connect-R", "https://i.imgur.com/2FYL1vh.png"),
        new Image("Tudor Chirila", "https://i.imgur.com/JzpPnDq.png"),
        new Image("Taylor Swift", "https://i.imgur.com/WtkN0M2.png"),
    ])
]

let crossImageUrl = "https://i.imgur.com/XK4HLLM.png";

let possibleImagePicks = [];

let selectedImages = [];

$(document).ready(function () {
    for (let i = 0; i < imageCategories.length; i++) {
        possibleImagePicks = possibleImagePicks.concat(imageCategories[i].members);
        $("#categoryCheckboxContainer").append($("<div>")
            .append($("<input>")
                .attr("type", "checkbox")
                .attr("value", imageCategories[i].name)
                .attr("class", "categoryCheckbox form-check-input")
                .attr("id", "categoryCheckbox-" + imageCategories[i].name)
                .attr("checked", true)
                .change(function () {
                    computePossibleImagePicks();
                }))
            .append($("<label>")
                .attr("for", "categoryCheckbox-" + imageCategories[i].name)
                .attr("class", "form-check-label")
                .attr("data-toggle", "tooltip")
                .attr("data-placement", "top")
                .attr("title", imageCategories[i].hint)
                .text(imageCategories[i].name)))
    }
    $('[data-toggle="tooltip"]').tooltip();
    $("#startButton").click(function () {
        if (possibleImagePicks.length < 24) {
            alert("Nu ai destule personaje! Ai doar " + possibleImagePicks.length + " din 24. Te rog mai adauga categorii.")
        } else {
            let randomPositions = generateRandomListPositions(possibleImagePicks.length, 24);
            let generatedCode = generateCode(randomPositions, possibleImagePicks.length);
            let randomPositionsNumberRepresentation = convertToNumberRepresentation(randomPositions);
            $("#gameCode").text(generatedCode);
            $("#imagesDiv").empty();
            $("#inputCodeButton").val("");
            populatePicturesFromPickedList(randomPositionsNumberRepresentation);
        }
    });
    $("#inputCodeButton").click(function () {
        if (possibleImagePicks.length < 24) {
            alert("Nu ai destule personaje! Ai doar " + possibleImagePicks.length + " din 24. Te rog mai adauga categorii.")
        } else {
            let code = $("#codeInput").val();
            let randomPositions = getPositionsFromCode(code);
            $("#gameCode").text(code);
            $("#imagesDiv").empty();
            $("#inputCodeButton").val("");
            populatePicturesFromPickedList(randomPositions);
        }
    });
    $("#chooseAgainButton").click(function () {
        let pickedImage = selectedImages[Math.floor(Math.random() * selectedImages.length)];
        $("#pickedImage").attr('src', pickedImage.imageLink);
        $('#pickedImageCaption').text(pickedImage.name);
    });
    $("#selectAllCategoriesButton").click(function () {
        $("input:checkbox").prop("checked", true);
        computePossibleImagePicks();
    })
})
function populatePicturesFromPickedList(picturePositions) {
    selectedImages = [];
    for (let i = 0; i < 4; i++) {
        let imageDiv = 'imgDiv' + i;
        $("#imagesDiv").append($('<div>').attr('id', imageDiv)
            .attr('style', 'display: flex; justify-content: space-evenly; width:100%; margin:2px'));
        for (let j = 0; j < 6; j++) {
            let currentImage = possibleImagePicks[picturePositions[i * 6 + j]];
            selectedImages.push(currentImage);
            $('#' + imageDiv).append($('<figure>').append($('<div>')
                .attr('class', 'wrapper')
                .click(function () {
                    $("#cross-img" + i + j).toggleClass('hidden-image');
                })
                .append($('<img>').attr('id', 'img' + i + j)
                    .attr('src', currentImage.imageLink)
                    .attr('class', 'contest-image'))
                .append($('<img>').attr('id', 'cross-img' + i + j)
                    .attr('src', crossImageUrl)
                    .attr('class', 'hidden-image cross-image')
                ))
                .append('<figcaption>' + currentImage.name + '</figcaption>'));
        }
    }
    let pickedImage = selectedImages[Math.floor(Math.random() * picturePositions.length)];
    $("#pickedImage").attr('src', pickedImage.imageLink);
    $('#pickedImageCaption').text(pickedImage.name);
    $('#pickedImageDiv').css('visibility', 'visible');
}
function generateRandomListPositions(listSize, randomCount) {
    let generatedPositionsCount = 0;
    let generatedPositions = [];
    for (let i = 0; i < listSize; i++) {
        generatedPositions.push(0);
    }
    while (generatedPositionsCount < randomCount) {
        let randomPosition = Math.floor(Math.random() * listSize);
        if (generatedPositions[randomPosition] === 0) {
            generatedPositions[randomPosition] = 1;
            generatedPositionsCount++;
        }
    }
    return generatedPositions;
}
function convertToNumberRepresentation(indexes) {
    let positions = [];
    for (let i = 0; i < indexes.length; i++) {
        if (indexes[i] === 1) {
            positions.push(i);
        }
    }

    return shuffle(positions);
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

function generateCode(selectedIndexes, indexCount) {
    let code = "";
    let i = 0;
    while (i < indexCount) {
        let currentNumber = 0;
        for (let j = 0; j < 3 && i < indexCount; j++) {
            if (selectedIndexes[i] === 1) {
                currentNumber += Math.pow(2, j);
            }
            i++;
        }
        code += currentNumber.toString();
    }
    return code;
}
function getPositionsFromCode(code) {
    let positions = [];
    for (let i = 0; i < code.length; i++) {
        let currentNumber = parseInt(code.charAt(i));
        let currentNumberArray = [];
        for (let j = 2; j >= 0; j--) {
            if (currentNumber >= Math.pow(2, j)) {
                currentNumberArray.push(i * 3 + j);
                currentNumber -= Math.pow(2, j);
            }
        }
        positions = positions.concat(currentNumberArray);
    }
    return shuffle(positions);
}

function computePossibleImagePicks() {
    possibleImagePicks = [];
    for (let i = 0; i < imageCategories.length; i++) {
        let categoryPicked = $("#categoryCheckbox-" + imageCategories[i].name).is(':checked');
        if (categoryPicked) {
            possibleImagePicks = possibleImagePicks.concat(imageCategories[i].members)
        }
    }
}