function handleFilter() {
  let textRole = document.getElementById("role").innerHTML.toLowerCase();
  let textLevel = document.getElementById("level").innerHTML.toLowerCase();
  let textLangOne = document.getElementById("langOne").innerHTML.toLowerCase();
  let textLangTwo = document.getElementById("langTwo").innerHTML.toLowerCase();
  let textLangThree = document.getElementById("langThree").innerHTML.toLowerCase();
  let textToolOne = document.getElementById("toolOne").innerHTML.toLowerCase();
  let textToolTwo = document.getElementById("toolTwo").innerHTML.toLowerCase();
  let containers = document.querySelectorAll(".container");

  containers.forEach((container) => {
    if (
      textRole !== "" &&
      textLevel == "" &&
      textLangOne == "" &&
      textLangOne == "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      container.dataset.role == textRole ? container.classList.remove("hidden") : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel !== "" &&
      textLangOne == "" &&
      textLangTwo == "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      container.dataset.role == textRole && container.dataset.level == textLevel
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel == "" &&
      textLangOne !== "" &&
      textLangTwo == "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel == "" &&
      textLangOne == "" &&
      textLangTwo !== "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel == "" &&
      textLangOne == "" &&
      textLangTwo == "" &&
      textLangThree !== "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel == "" &&
      textLangOne == "" &&
      textLangTwo == "" &&
      textLangThree == "" &&
      textToolOne !== "" &&
      textToolTwo == ""
    ) {
      container.dataset.role == textRole && (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel == "" &&
      textLangOne == "" &&
      textLangTwo == "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo !== ""
    ) {
      container.dataset.role == textRole && (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }

    if (
      textRole !== "" &&
      textLevel !== "" &&
      textLangOne !== "" &&
      textLangTwo == "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel !== "" &&
      textLangOne == "" &&
      textLangTwo !== "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel !== "" &&
      textLangOne == "" &&
      textLangTwo == "" &&
      textLangThree !== "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel !== "" &&
      textLangOne == "" &&
      textLangTwo == "" &&
      textLangThree == "" &&
      textToolOne !== "" &&
      textToolTwo == ""
    ) {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel !== "" &&
      textLangOne == "" &&
      textLangTwo == "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo !== ""
    ) {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel == "" &&
      textLangOne !== "" &&
      textLangTwo !== "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel == "" &&
      textLangOne !== "" &&
      textLangTwo == "" &&
      textLangThree !== "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel == "" &&
      textLangOne !== "" &&
      textLangTwo == "" &&
      textLangThree == "" &&
      textToolOne !== "" &&
      textToolTwo == ""
    ) {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel == "" &&
      textLangOne !== "" &&
      textLangTwo == "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo !== ""
    ) {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel == "" &&
      textLangOne == "" &&
      textLangTwo !== "" &&
      textLangThree !== "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel == "" &&
      textLangOne == "" &&
      textLangTwo !== "" &&
      textLangThree == "" &&
      textToolOne !== "" &&
      textToolTwo == ""
    ) {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel == "" &&
      textLangOne == "" &&
      textLangTwo !== "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo !== ""
    ) {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel == "" &&
      textLangOne == "" &&
      textLangTwo == "" &&
      textLangThree !== "" &&
      textToolOne !== "" &&
      textToolTwo == ""
    ) {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel == "" &&
      textLangOne == "" &&
      textLangTwo == "" &&
      textLangThree !== "" &&
      textToolOne == "" &&
      textToolTwo !== ""
    ) {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel == "" &&
      textLangOne == "" &&
      textLangTwo == "" &&
      textLangThree == "" &&
      textToolOne !== "" &&
      textToolTwo !== ""
    ) {
      container.dataset.role == textRole &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel !== "" &&
      textLangOne !== "" &&
      textLangTwo !== "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel !== "" &&
      textLangOne !== "" &&
      textLangTwo == "" &&
      textLangThree !== "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel !== "" &&
      textLangOne !== "" &&
      textLangTwo == "" &&
      textLangThree == "" &&
      textToolOne !== "" &&
      textToolTwo == ""
    ) {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel !== "" &&
      textLangOne !== "" &&
      textLangTwo == "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo !== ""
    ) {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel !== "" &&
      textLangOne !== "" &&
      textLangTwo !== "" &&
      textLangThree !== "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel !== "" &&
      textLangOne !== "" &&
      textLangTwo !== "" &&
      textLangThree == "" &&
      textToolOne !== "" &&
      textToolTwo == ""
    ) {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel !== "" &&
      textLangOne !== "" &&
      textLangTwo !== "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo !== ""
    ) {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel !== "" &&
      textLangOne !== "" &&
      textLangTwo !== "" &&
      textLangThree == "" &&
      textToolOne !== "" &&
      textToolTwo !== ""
    ) {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    // LEVEL
    if (
      textRole == "" &&
      textLevel !== "" &&
      textLangOne == "" &&
      textLangTwo == "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      container.dataset.level == textLevel ? container.classList.remove("hidden") : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel !== "" &&
      textLangOne !== "" &&
      textLangTwo == "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel !== "" &&
      textLangOne == "" &&
      textLangTwo !== "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel !== "" &&
      textLangOne == "" &&
      textLangTwo == "" &&
      textLangThree !== "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel !== "" &&
      textLangOne == "" &&
      textLangTwo == "" &&
      textLangThree == "" &&
      textToolOne !== "" &&
      textToolTwo == ""
    ) {
      container.dataset.level == textLevel && (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel !== "" &&
      textLangOne == "" &&
      textLangTwo == "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo !== ""
    ) {
      container.dataset.level == textLevel && (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel !== "" &&
      textLangOne !== "" &&
      textLangTwo !== "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel !== "" &&
      textLangOne !== "" &&
      textLangTwo == "" &&
      textLangThree !== "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel !== "" &&
      textLangOne !== "" &&
      textLangTwo == "" &&
      textLangThree == "" &&
      textToolOne !== "" &&
      textToolTwo == ""
    ) {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel !== "" &&
      textLangOne !== "" &&
      textLangTwo == "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo !== ""
    ) {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel !== "" &&
      textLangOne !== "" &&
      textLangTwo !== "" &&
      textLangThree == "" &&
      textToolOne !== "" &&
      textToolTwo == ""
    ) {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel !== "" &&
      textLangOne !== "" &&
      textLangTwo !== "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo !== ""
    ) {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel !== "" &&
      textLangOne !== "" &&
      textLangTwo !== "" &&
      textLangThree == "" &&
      textToolOne !== "" &&
      textToolTwo !== ""
    ) {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    // LANGONE
    if (
      textRole == "" &&
      textLevel == "" &&
      textLangOne !== "" &&
      textLangTwo == "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel == "" &&
      textLangOne !== "" &&
      textLangTwo !== "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel == "" &&
      textLangOne !== "" &&
      textLangTwo == "" &&
      textLangThree !== "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel == "" &&
      textLangOne !== "" &&
      textLangTwo == "" &&
      textLangThree == "" &&
      textToolOne !== "" &&
      textToolTwo == ""
    ) {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel == "" &&
      textLangOne !== "" &&
      textLangTwo == "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo !== ""
    ) {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel == "" &&
      textLangOne !== "" &&
      textLangTwo !== "" &&
      textLangThree !== "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel == "" &&
      textLangOne !== "" &&
      textLangTwo !== "" &&
      textLangThree == "" &&
      textToolOne !== "" &&
      textToolTwo == ""
    ) {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel == "" &&
      textLangOne !== "" &&
      textLangTwo !== "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo !== ""
    ) {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel == "" &&
      textLangOne !== "" &&
      textLangTwo !== "" &&
      textLangThree == "" &&
      textToolOne !== "" &&
      textToolTwo !== ""
    ) {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    // LANGTWO
    if (
      textRole == "" &&
      textLevel == "" &&
      textLangOne == "" &&
      textLangTwo !== "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel == "" &&
      textLangOne == "" &&
      textLangTwo !== "" &&
      textLangThree !== "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel == "" &&
      textLangOne == "" &&
      textLangTwo !== "" &&
      textLangThree == "" &&
      textToolOne !== "" &&
      textToolTwo == ""
    ) {
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel == "" &&
      textLangOne == "" &&
      textLangTwo !== "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo !== ""
    ) {
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel == "" &&
      textLangOne == "" &&
      textLangTwo !== "" &&
      textLangThree == "" &&
      textToolOne !== "" &&
      textToolTwo !== ""
    ) {
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    // LANGTHREE
    if (
      textRole == "" &&
      textLevel == "" &&
      textLangOne == "" &&
      textLangTwo == "" &&
      textLangThree !== "" &&
      textToolOne == "" &&
      textToolTwo == ""
    ) {
      container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel == "" &&
      textLangOne == "" &&
      textLangTwo == "" &&
      textLangThree !== "" &&
      textToolOne !== "" &&
      textToolTwo == ""
    ) {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel == "" &&
      textLangOne == "" &&
      textLangTwo == "" &&
      textLangThree !== "" &&
      textToolOne == "" &&
      textToolTwo !== ""
    ) {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel == "" &&
      textLangOne == "" &&
      textLangTwo == "" &&
      textLangThree !== "" &&
      textToolOne !== "" &&
      textToolTwo !== ""
    ) {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    //TOOLONE
    if (
      textRole == "" &&
      textLevel == "" &&
      textLangOne == "" &&
      textLangTwo == "" &&
      textLangThree == "" &&
      textToolOne !== "" &&
      textToolTwo == ""
    ) {
      container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole == "" &&
      textLevel == "" &&
      textLangOne == "" &&
      textLangTwo == "" &&
      textLangThree == "" &&
      textToolOne !== "" &&
      textToolTwo !== ""
    ) {
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }

    //TOOLTWO
    if (
      textRole == "" &&
      textLevel == "" &&
      textLangOne == "" &&
      textLangTwo == "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo !== ""
    ) {
      container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
  });
}

function handleSearchRole(event) {
  let textRole = document.getElementById("role");
  let filterRole = document.getElementById("searchRole");
  let target = event.target.innerHTML;
  filterRole.classList.remove("hidden");
  textRole.innerHTML = target;
  handleFilter();
  let filter = document.getElementById("filter");
  filter.classList.remove("hidden");
}

function handleSearchLevel(event) {
  let textLevel = document.getElementById("level");
  let filterLevel = document.getElementById("searchLevel");
  let target = event.target.innerHTML;
  filterLevel.classList.remove("hidden");
  textLevel.innerHTML = target;
  handleFilter();
  let filter = document.getElementById("filter");
  filter.classList.remove("hidden");
}

function handleSearchLangOne(event) {
  let textLang = document.getElementById("langOne");
  let filterLang = document.getElementById("searchLangOne");
  let target = event.target.innerHTML;
  filterLang.classList.remove("hidden");
  textLang.innerHTML = target;
  handleFilter();
  let filter = document.getElementById("filter");
  filter.classList.remove("hidden");
}
function handleSearchLangTwo(event) {
  let filter = document.getElementById("filter");
  filter.classList.remove("hidden");
  let textLangOne = document.getElementById("langOne").innerHTML;
  let textLangTwo = document.getElementById("langTwo");
  let filterLangTwo = document.getElementById("searchLangTwo");
  let target = event.target.innerHTML;
  console.log(textLangOne, target);
  if (textLangOne !== target) {
    filterLangTwo.classList.remove("hidden");
    textLangTwo.innerHTML = target;
    handleFilter();
  } else {
    textLangTwo = "";
    filterLangTwo.innerHTML = "";
  }
}
function handleSearchLangThree(event) {
  let filter = document.getElementById("filter");
  filter.classList.remove("hidden");
  let textLangOne = document.getElementById("langOne").innerHTML;
  let textLangTwo = document.getElementById("langTwo").innerHTML;
  let textLangThree = document.getElementById("langThree");
  let filterLangThree = document.getElementById("searchLangThree");
  let target = event.target.innerHTML;
  if (textLangOne !== target) {
    filterLangThree.classList.remove("hidden");
    textLangThree.innerHTML = target;
    handleFilter();
  } else if (textLangTwo !== target) {
    filterLangThree.classList.remove("hidden");
    textLangThree.innerHTML = target;
    handleFilter();
  } else {
    textLangThree = "";
    filterLangThree.innerHTML = "";
  }
}
function handleSearchToolOne(event) {
  let filter = document.getElementById("filter");
  filter.classList.remove("hidden");
  let textTool = document.getElementById("toolOne");
  let filterTool = document.getElementById("searchToolOne");
  let target = event.target.innerHTML;
  filterTool.classList.remove("hidden");
  textTool.innerHTML = target;
  handleFilter();
}
function handleSearchToolTwo(event) {
  let filter = document.getElementById("filter");
  filter.classList.remove("hidden");
  let textTool = document.getElementById("toolTwo");
  let filterTool = document.getElementById("searchToolTwo");
  let target = event.target.innerHTML;
  filterTool.classList.remove("hidden");
  textTool.innerHTML = target;
  handleFilter();
}

function handleClearRole() {
  let role = document.getElementById("role");
  let filterRole = document.getElementById("searchRole");
  filterRole.classList.add("hidden");
  role.innerHTML = "";
  let textRole = document.getElementById("role").innerHTML.toLowerCase();
  let textLevel = document.getElementById("level").innerHTML.toLowerCase();
  let textLangOne = document.getElementById("langOne").innerHTML.toLowerCase();
  let textLangTwo = document.getElementById("langTwo").innerHTML.toLowerCase();
  let textLangThree = document.getElementById("langThree").innerHTML.toLowerCase();
  let textToolOne = document.getElementById("toolOne").innerHTML.toLowerCase();
  let textToolTwo = document.getElementById("toolTwo").innerHTML.toLowerCase();
  let containers = document.querySelectorAll(".container");
  containers.forEach((container) => {
    if (textLevel == "" && textLangOne == "" && textLangTwo == "" && textLangThree == "" && textToolOne == "" && textToolOne == "") {
      container.classList.remove("hidden");
    }
    if (textLevel !== "" && textLangOne == "" && textLangTwo == "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.level == textLevel ? container.classList.remove("hidden") : container.classList.add("hidden");
    }
    if (textLevel == "" && textLangOne !== "" && textLangTwo == "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel == "" && textLangOne == "" && textLangTwo !== "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel == "" && textLangOne == "" && textLangTwo == "" && textLangThree !== "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel == "" && textLangOne == "" && textLangTwo == "" && textLangThree == "" && textToolOne !== "" && textToolTwo == "") {
      container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel == "" && textLangOne == "" && textLangTwo == "" && textLangThree == "" && textToolOne == "" && textToolTwo !== "") {
      container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne !== "" && textLangTwo == "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne == "" && textLangTwo !== "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne == "" && textLangTwo == "" && textLangThree !== "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne == "" && textLangTwo == "" && textLangThree == "" && textToolOne !== "" && textToolTwo == "") {
      container.dataset.level == textLevel && (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne == "" && textLangTwo == "" && textLangThree == "" && textToolOne == "" && textToolTwo !== "") {
      container.dataset.level == textLevel && (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel == "" && textLangOne !== "" && textLangTwo !== "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel == "" && textLangOne !== "" && textLangTwo == "" && textLangThree !== "" && textToolOne == "" && textToolTwo == "") {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel == "" && textLangOne !== "" && textLangTwo == "" && textLangThree == "" && textToolOne !== "" && textToolTwo == "") {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel == "" && textLangOne !== "" && textLangTwo == "" && textLangThree == "" && textToolOne == "" && textToolTwo !== "") {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel == "" && textLangOne == "" && textLangTwo !== "" && textLangThree !== "" && textToolOne == "" && textToolTwo == "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel == "" && textLangOne == "" && textLangTwo !== "" && textLangThree == "" && textToolOne !== "" && textToolTwo == "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel == "" && textLangOne == "" && textLangTwo !== "" && textLangThree == "" && textToolOne == "" && textToolTwo !== "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel == "" && textLangOne == "" && textLangTwo == "" && textLangThree !== "" && textToolOne !== "" && textToolTwo == "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel == "" && textLangOne == "" && textLangTwo == "" && textLangThree !== "" && textToolOne == "" && textToolTwo !== "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel == "" && textLangOne == "" && textLangTwo == "" && textLangThree == "" && textToolOne !== "" && textToolTwo !== "") {
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne !== "" && textLangTwo !== "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne !== "" && textLangTwo == "" && textLangThree !== "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne !== "" && textLangTwo == "" && textLangThree == "" && textToolOne !== "" && textToolTwo == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne !== "" && textLangTwo == "" && textLangThree == "" && textToolOne == "" && textToolTwo !== "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne !== "" && textLangTwo !== "" && textLangThree !== "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne !== "" && textLangTwo !== "" && textLangThree == "" && textToolOne !== "" && textToolTwo == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne !== "" && textLangTwo !== "" && textLangThree == "" && textToolOne == "" && textToolTwo !== "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne !== "" && textLangTwo !== "" && textLangThree == "" && textToolOne !== "" && textToolTwo !== "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
  });
}
function handleClearLevel() {
  let level = document.getElementById("level");
  let filterLevel = document.getElementById("searchLevel");
  filterLevel.classList.add("hidden");
  level.innerHTML = "";
  let textRole = document.getElementById("role").innerHTML.toLowerCase();
  let textLevel = document.getElementById("level").innerHTML.toLowerCase();
  let textLangOne = document.getElementById("langOne").innerHTML.toLowerCase();
  let textLangTwo = document.getElementById("langTwo").innerHTML.toLowerCase();
  let textLangThree = document.getElementById("langThree").innerHTML.toLowerCase();
  let textToolOne = document.getElementById("toolOne").innerHTML.toLowerCase();
  let textToolTwo = document.getElementById("toolTwo").innerHTML.toLowerCase();
  let containers = document.querySelectorAll(".container");
  containers.forEach((container) => {
    if (textRole == "" && textLangOne == "" && textLangTwo == "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.classList.remove("hidden");
    }
    if (textRole !== "" && textLangOne == "" && textLangTwo == "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole ? container.classList.remove("hidden") : container.classList.add("hidden");
    }
    if (textLangOne !== "" && textLangTwo == "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLangOne == "" && textLangTwo !== "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLangOne == "" && textLangTwo == "" && textLangThree !== "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLangOne == "" && textLangTwo == "" && textLangThree == "" && textToolOne !== "" && textToolTwo == "") {
      container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLangOne == "" && textLangTwo == "" && textLangThree == "" && textToolOne == "" && textToolTwo !== "") {
      container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLangOne !== "" && textLangTwo == "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLangOne == "" && textLangTwo !== "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLangOne == "" && textLangTwo == "" && textLangThree !== "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }

    if (textRole !== "" && textLangOne == "" && textLangTwo == "" && textLangThree == "" && textToolOne !== "" && textToolTwo == "") {
      container.dataset.role == textRole && (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLangOne == "" && textLangTwo == "" && textLangThree == "" && textToolOne == "" && textToolTwo !== "") {
      container.dataset.role == textRole && (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLangOne !== "" && textLangTwo !== "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLangOne !== "" && textLangTwo == "" && textLangThree !== "" && textToolOne == "" && textToolTwo == "") {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLangOne !== "" && textLangTwo == "" && textLangThree == "" && textToolOne !== "" && textToolTwo == "") {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLangOne !== "" && textLangTwo == "" && textLangThree == "" && textToolOne == "" && textToolTwo !== "") {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLangOne == "" && textLangTwo !== "" && textLangThree !== "" && textToolOne == "" && textToolTwo == "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLangOne == "" && textLangTwo !== "" && textLangThree == "" && textToolOne !== "" && textToolTwo == "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLangOne == "" && textLangTwo !== "" && textLangThree == "" && textToolOne == "" && textToolTwo !== "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLangOne == "" && textLangTwo == "" && textLangThree !== "" && textToolOne !== "" && textToolTwo == "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLangOne == "" && textLangTwo == "" && textLangThree !== "" && textToolOne == "" && textToolTwo !== "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLangOne == "" && textLangTwo == "" && textLangThree == "" && textToolOne !== "" && textToolTwo !== "") {
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLangOne !== "" && textLangTwo !== "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLangOne !== "" && textLangTwo == "" && textLangThree !== "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLangOne !== "" && textLangTwo == "" && textLangThree == "" && textToolOne !== "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLangOne !== "" && textLangTwo == "" && textLangThree == "" && textToolOne == "" && textToolTwo !== "") {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLangOne !== "" && textLangTwo !== "" && textLangThree !== "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLangOne !== "" && textLangTwo !== "" && textLangThree == "" && textToolOne !== "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLangOne !== "" && textLangTwo !== "" && textLangThree == "" && textToolOne == "" && textToolTwo !== "") {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLangOne !== "" && textLangTwo !== "" && textLangThree == "" && textToolOne !== "" && textToolTwo !== "") {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
  });
}
function handleClearLangOne() {
  let textLang = document.getElementById("langOne");
  let filterLang = document.getElementById("searchLangOne");
  filterLang.classList.add("hidden");
  textLang.innerHTML = "";
  let textRole = document.getElementById("role").innerHTML.toLowerCase();
  let textLevel = document.getElementById("level").innerHTML.toLowerCase();
  let textLangOne = document.getElementById("langOne").innerHTML.toLowerCase();
  let textLangTwo = document.getElementById("langTwo").innerHTML.toLowerCase();
  let textLangThree = document.getElementById("langThree").innerHTML.toLowerCase();
  let textToolOne = document.getElementById("toolOne").innerHTML.toLowerCase();
  let textToolTwo = document.getElementById("toolTwo").innerHTML.toLowerCase();
  let containers = document.querySelectorAll(".container");

  containers.forEach((container) => {
    if (textRole == "" && textLevel == "" && textLangTwo == "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.classList.remove("hidden");
    }
    if (textRole !== "" && textLangTwo == "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole ? container.classList.remove("hidden") : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel !== "" && textLangTwo == "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.level == textLevel ? container.classList.remove("hidden") : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangTwo !== "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangTwo == "" && textLangThree !== "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangTwo == "" && textLangThree == "" && textToolOne !== "" && textToolTwo == "") {
      container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangTwo == "" && textLangThree == "" && textToolOne == "" && textToolTwo !== "") {
      container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangTwo == "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole && container.dataset.level == textLevel
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel == "" && textLangTwo !== "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel == "" && textLangTwo == "" && textLangThree !== "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel == "" && textLangTwo == "" && textLangThree == "" && textToolOne !== "" && textToolTwo == "") {
      container.dataset.role == textRole && (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel == "" &&
      textLangOne == "" &&
      textLangTwo == "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo !== ""
    ) {
      container.dataset.role == textRole && (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel !== "" && textLangTwo !== "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel !== "" && textLangTwo == "" && textLangThree !== "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel !== "" && textLangTwo == "" && textLangThree == "" && textToolOne !== "" && textToolTwo == "") {
      container.dataset.level == textLevel && (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel !== "" && textLangTwo == "" && textLangThree == "" && textToolOne == "" && textToolTwo !== "") {
      container.dataset.level == textLevel && (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangTwo !== "" && textLangThree !== "" && textToolOne == "" && textToolTwo == "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangTwo !== "" && textLangThree == "" && textToolOne !== "" && textToolTwo == "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangTwo !== "" && textLangThree == "" && textToolOne == "" && textToolTwo !== "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangTwo == "" && textLangThree !== "" && textToolOne !== "" && textToolTwo == "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangTwo == "" && textLangThree !== "" && textToolOne == "" && textToolTwo !== "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangTwo == "" && textLangThree == "" && textToolOne !== "" && textToolTwo !== "") {
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangTwo !== "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangTwo == "" && textLangThree !== "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangTwo == "" && textLangThree == "" && textToolOne !== "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangTwo == "" && textLangThree == "" && textToolOne == "" && textToolTwo !== "") {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangTwo !== "" && textLangThree !== "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangTwo !== "" && textLangThree == "" && textToolOne !== "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangTwo !== "" && textLangThree == "" && textToolOne == "" && textToolTwo !== "") {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangTwo !== "" && textLangThree == "" && textToolOne !== "" && textToolTwo !== "") {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
  });
}
function handleClearLangTwo() {
  let textLang = document.getElementById("langTwo");
  let filterLang = document.getElementById("searchLangTwo");
  filterLang.classList.add("hidden");
  textLang.innerHTML = "";
  let textRole = document.getElementById("role").innerHTML.toLowerCase();
  let textLevel = document.getElementById("level").innerHTML.toLowerCase();
  let textLangOne = document.getElementById("langOne").innerHTML.toLowerCase();
  let textLangTwo = document.getElementById("langTwo").innerHTML.toLowerCase();
  let textLangThree = document.getElementById("langThree").innerHTML.toLowerCase();
  let textToolOne = document.getElementById("toolOne").innerHTML.toLowerCase();
  let textToolTwo = document.getElementById("toolTwo").innerHTML.toLowerCase();
  let containers = document.querySelectorAll(".container");

  containers.forEach((container) => {
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.classList.remove("hidden");
    }
    if (textRole !== "" && textLevel == "" && textLangOne == "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole ? container.classList.remove("hidden") : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel !== "" && textLangOne == "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.level == textLevel ? container.classList.remove("hidden") : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne !== "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangThree !== "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangThree == "" && textToolOne !== "" && textToolTwo == "") {
      container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangThree == "" && textToolOne == "" && textToolTwo !== "") {
      container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangOne == "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole && container.dataset.level == textLevel
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel == "" && textLangOne !== "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel == "" && textLangOne == "" && textLangThree !== "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel == "" && textLangOne == "" && textLangThree == "" && textToolOne !== "" && textToolTwo == "") {
      container.dataset.role == textRole && (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel == "" &&
      textLangOne == "" &&
      textLangOne == "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo !== ""
    ) {
      container.dataset.role == textRole && (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel !== "" && textLangOne !== "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel !== "" && textLangOne == "" && textLangThree !== "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel !== "" && textLangOne == "" && textLangThree == "" && textToolOne !== "" && textToolTwo == "") {
      container.dataset.level == textLevel && (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel !== "" && textLangOne == "" && textLangThree == "" && textToolOne == "" && textToolTwo !== "") {
      container.dataset.level == textLevel && (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne !== "" && textLangThree !== "" && textToolOne == "" && textToolTwo == "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne !== "" && textLangThree == "" && textToolOne !== "" && textToolTwo == "") {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne !== "" && textLangThree == "" && textToolOne == "" && textToolTwo !== "") {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangThree !== "" && textToolOne !== "" && textToolTwo == "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangThree !== "" && textToolOne == "" && textToolTwo !== "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangThree == "" && textToolOne !== "" && textToolTwo !== "") {
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangOne !== "" && textLangThree == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangOne == "" && textLangThree !== "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangOne == "" && textLangThree == "" && textToolOne !== "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangOne == "" && textLangThree == "" && textToolOne == "" && textToolTwo !== "") {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangOne !== "" && textLangThree !== "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangOne !== "" && textLangThree == "" && textToolOne !== "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangOne !== "" && textLangThree == "" && textToolOne == "" && textToolTwo !== "") {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangOne !== "" && textLangThree == "" && textToolOne !== "" && textToolTwo !== "") {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
  });
}
function handleClearLangThree() {
  let textLang = document.getElementById("langThree");
  let filterLang = document.getElementById("searchLangThree");
  filterLang.classList.add("hidden");
  textLang.innerHTML = "";
  let textRole = document.getElementById("role").innerHTML.toLowerCase();
  let textLevel = document.getElementById("level").innerHTML.toLowerCase();
  let textLangOne = document.getElementById("langOne").innerHTML.toLowerCase();
  let textLangTwo = document.getElementById("langTwo").innerHTML.toLowerCase();
  let textLangThree = document.getElementById("langThree").innerHTML.toLowerCase();
  let textToolOne = document.getElementById("toolOne").innerHTML.toLowerCase();
  let textToolTwo = document.getElementById("toolTwo").innerHTML.toLowerCase();
  let containers = document.querySelectorAll(".container");

  containers.forEach((container) => {
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangTwo == "" && textToolOne == "" && textToolTwo == "") {
      container.classList.remove("hidden");
    }
    if (textRole !== "" && textLevel == "" && textLangOne == "" && textLangTwo == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole ? container.classList.remove("hidden") : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel !== "" && textLangOne == "" && textLangTwo == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.level == textLevel ? container.classList.remove("hidden") : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne !== "" && textLangTwo == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangTwo !== "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangTwo == "" && textToolOne !== "" && textToolTwo == "") {
      container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangTwo == "" && textToolOne == "" && textToolTwo !== "") {
      container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangOne == "" && textLangTwo == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole && container.dataset.level == textLevel
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel == "" && textLangOne !== "" && textLangTwo == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel == "" && textLangOne == "" && textLangTwo !== "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel == "" && textLangOne == "" && textLangTwo == "" && textToolOne !== "" && textToolTwo == "") {
      container.dataset.role == textRole && (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (
      textRole !== "" &&
      textLevel == "" &&
      textLangOne == "" &&
      textLangOne == "" &&
      textLangThree == "" &&
      textToolOne == "" &&
      textToolTwo !== ""
    ) {
      container.dataset.role == textRole && (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel !== "" && textLangOne !== "" && textLangTwo == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel !== "" && textLangOne == "" && textLangTwo !== "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel !== "" && textLangOne == "" && textLangTwo == "" && textToolOne !== "" && textToolTwo == "") {
      container.dataset.level == textLevel && (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel !== "" && textLangOne == "" && textLangTwo == "" && textToolOne == "" && textToolTwo !== "") {
      container.dataset.level == textLevel && (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne !== "" && textLangTwo !== "" && textToolOne == "" && textToolTwo == "") {
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne !== "" && textLangTwo == "" && textToolOne !== "" && textToolTwo == "") {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne !== "" && textLangTwo == "" && textToolOne == "" && textToolTwo !== "") {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangTwo !== "" && textToolOne !== "" && textToolTwo == "") {
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangTwo !== "" && textToolOne == "" && textToolTwo !== "") {
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangTwo == "" && textToolOne !== "" && textToolTwo !== "") {
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangOne !== "" && textLangTwo == "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangOne == "" && textLangTwo !== "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangOne == "" && textLangTwo == "" && textToolOne !== "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangOne == "" && textLangTwo == "" && textToolOne == "" && textToolTwo !== "") {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangOne !== "" && textLangTwo !== "" && textToolOne == "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangOne !== "" && textLangTwo == "" && textToolOne !== "" && textToolTwo == "") {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangOne !== "" && textLangTwo == "" && textToolOne == "" && textToolTwo !== "") {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangOne !== "" && textLangTwo == "" && textToolOne !== "" && textToolTwo !== "") {
      container.dataset.role == textRole &&
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
  });
}
function handleClearToolOne() {
  let textTool = document.getElementById("toolOne");
  let filterTool = document.getElementById("searchToolOne");
  filterTool.classList.add("hidden");
  textTool.innerHTML = "";
  let textRole = document.getElementById("role").innerHTML.toLowerCase();
  let textLevel = document.getElementById("level").innerHTML.toLowerCase();
  let textLangOne = document.getElementById("langOne").innerHTML.toLowerCase();
  let textLangTwo = document.getElementById("langTwo").innerHTML.toLowerCase();
  let textLangThree = document.getElementById("langThree").innerHTML.toLowerCase();
  let textToolOne = document.getElementById("toolOne").innerHTML.toLowerCase();
  let textToolTwo = document.getElementById("toolTwo").innerHTML.toLowerCase();
  let containers = document.querySelectorAll(".container");
  containers.forEach((container) => {
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangTwo == "" && textLangThree == "" && textToolTwo == "") {
      container.classList.remove("hidden");
    }
    if (textRole == "" && textLevel !== "" && textLangOne == "" && textLangTwo == "" && textLangThree == "" && textToolTwo == "") {
      container.dataset.level == textLevel ? container.classList.remove("hidden") : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne !== "" && textLangTwo == "" && textLangThree == "" && textToolTwo == "") {
      container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangTwo !== "" && textLangThree == "" && textToolTwo == "") {
      container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangTwo == "" && textLangThree !== "" && textToolTwo == "") {
      container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel == "" && textLangOne == "" && textLangTwo == "" && textLangThree == "" && textToolTwo == "") {
      container.dataset.role == textRole ? container.classList.remove("hidden") : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangTwo == "" && textLangThree == "" && textToolTwo !== "") {
      container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel !== "" && textLangOne !== "" && textLangTwo == "" && textLangThree == "" && textToolTwo == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel !== "" && textLangOne == "" && textLangTwo !== "" && textLangThree == "" && textToolTwo == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel !== "" && textLangOne == "" && textLangTwo == "" && textLangThree !== "" && textToolTwo == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangOne == "" && textLangTwo == "" && textLangThree == "" && textToolTwo == "") {
      container.dataset.level == textLevel && container.dataset.role == textRole
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel !== "" && textLangOne == "" && textLangTwo == "" && textLangThree == "" && textToolTwo !== "") {
      container.dataset.level == textLevel && (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne !== "" && textLangTwo !== "" && textLangThree == "" && textToolTwo == "") {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne !== "" && textLangTwo == "" && textLangThree !== "" && textToolTwo == "") {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel == "" && textLangOne !== "" && textLangTwo == "" && textLangThree == "" && textToolTwo == "") {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      container.dataset.role == textRole
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne !== "" && textLangTwo == "" && textLangThree == "" && textToolTwo !== "") {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangTwo !== "" && textLangThree !== "" && textToolTwo == "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel == "" && textLangOne == "" && textLangTwo !== "" && textLangThree == "" && textToolTwo == "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      container.dataset.role == textRole
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangTwo !== "" && textLangThree == "" && textToolTwo !== "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel == "" && textLangOne == "" && textLangTwo == "" && textLangThree !== "" && textToolTwo == "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      container.dataset.role == textRole
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangTwo == "" && textLangThree !== "" && textToolTwo !== "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }

    if (textLevel == "" && textLangOne == "" && textLangTwo == "" && textLangThree == "" && textRole !== "" && textToolTwo !== "") {
      container.dataset.role == textRole && (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne !== "" && textLangTwo !== "" && textLangThree == "" && textToolTwo == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne !== "" && textLangTwo == "" && textLangThree !== "" && textToolTwo == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne !== "" && textLangTwo == "" && textLangThree == "" && textRole !== "" && textToolTwo == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      container.dataset.role == textRole
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne !== "" && textLangTwo == "" && textLangThree == "" && textToolTwo !== "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne !== "" && textLangTwo !== "" && textLangThree !== "" && textToolTwo == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne !== "" && textLangTwo !== "" && textLangThree == "" && textRole !== "" && textToolTwo == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      container.dataset.role == textRole
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }

    if (textLevel !== "" && textLangOne !== "" && textLangTwo !== "" && textLangThree == "" && textToolTwo !== "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne !== "" && textLangTwo !== "" && textLangThree == "" && textRole !== "" && textToolTwo !== "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      container.dataset.role == textRole &&
      (container.dataset.toolOne == textToolTwo || container.dataset.toolTwo == textToolTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
  });
}
function handleClearToolTwo() {
  let textTool = document.getElementById("toolTwo");
  let filterTool = document.getElementById("searchToolTwo");
  filterTool.classList.add("hidden");
  textTool.innerHTML = "";
  let textRole = document.getElementById("role").innerHTML.toLowerCase();
  let textLevel = document.getElementById("level").innerHTML.toLowerCase();
  let textLangOne = document.getElementById("langOne").innerHTML.toLowerCase();
  let textLangTwo = document.getElementById("langTwo").innerHTML.toLowerCase();
  let textLangThree = document.getElementById("langThree").innerHTML.toLowerCase();
  let textToolOne = document.getElementById("toolOne").innerHTML.toLowerCase();
  let textToolTwo = document.getElementById("toolTwo").innerHTML.toLowerCase();
  let containers = document.querySelectorAll(".container");
  containers.forEach((container) => {
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangTwo == "" && textLangThree == "" && textToolOne == "") {
      container.classList.remove("hidden");
    }
    if (textRole == "" && textLevel !== "" && textLangOne == "" && textLangTwo == "" && textLangThree == "" && textToolOne == "") {
      container.dataset.level == textLevel ? container.classList.remove("hidden") : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne !== "" && textLangTwo == "" && textLangThree == "" && textToolOne == "") {
      container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangTwo !== "" && textLangThree == "" && textToolOne == "") {
      container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangTwo == "" && textLangThree !== "" && textToolOne == "") {
      container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel == "" && textLangOne == "" && textLangTwo == "" && textLangThree == "" && textToolOne == "") {
      container.dataset.role == textRole ? container.classList.remove("hidden") : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangTwo == "" && textLangThree == "" && textToolOne !== "") {
      container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel !== "" && textLangOne !== "" && textLangTwo == "" && textLangThree == "" && textToolOne == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel !== "" && textLangOne == "" && textLangTwo !== "" && textLangThree == "" && textToolOne == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel !== "" && textLangOne == "" && textLangTwo == "" && textLangThree !== "" && textToolOne == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel !== "" && textLangOne == "" && textLangTwo == "" && textLangThree == "" && textToolOne == "") {
      container.dataset.level == textLevel && container.dataset.role == textRole
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel !== "" && textLangOne == "" && textLangTwo == "" && textLangThree == "" && textToolOne !== "") {
      container.dataset.level == textLevel && (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne !== "" && textLangTwo !== "" && textLangThree == "" && textToolOne == "") {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne !== "" && textLangTwo == "" && textLangThree !== "" && textToolOne == "") {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel == "" && textLangOne !== "" && textLangTwo == "" && textLangThree == "" && textToolOne == "") {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      container.dataset.role == textRole
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne !== "" && textLangTwo == "" && textLangThree == "" && textToolOne !== "") {
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangTwo !== "" && textLangThree !== "" && textToolOne == "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel == "" && textLangOne == "" && textLangTwo !== "" && textLangThree == "" && textToolOne == "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      container.dataset.role == textRole
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangTwo !== "" && textLangThree == "" && textToolOne !== "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole !== "" && textLevel == "" && textLangOne == "" && textLangTwo == "" && textLangThree !== "" && textToolOne == "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      container.dataset.role == textRole
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textRole == "" && textLevel == "" && textLangOne == "" && textLangTwo == "" && textLangThree !== "" && textToolOne !== "") {
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }

    if (textLevel == "" && textLangOne == "" && textLangTwo == "" && textLangThree == "" && textRole !== "" && textToolOne !== "") {
      container.dataset.role == textRole && (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne !== "" && textLangTwo !== "" && textLangThree == "" && textToolOne == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne !== "" && textLangTwo == "" && textLangThree !== "" && textToolOne == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne !== "" && textLangTwo == "" && textLangThree == "" && textRole !== "" && textToolOne == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      container.dataset.role == textRole
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne !== "" && textLangTwo == "" && textLangThree == "" && textToolOne !== "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne !== "" && textLangTwo !== "" && textLangThree !== "" && textToolOne == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.langOne == textLangThree || container.dataset.langTwo == textLangThree || container.dataset.langThree == textLangThree)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne !== "" && textLangTwo !== "" && textLangThree == "" && textRole !== "" && textToolOne == "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      container.dataset.role == textRole
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }

    if (textLevel !== "" && textLangOne !== "" && textLangTwo !== "" && textLangThree == "" && textToolOne !== "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
    if (textLevel !== "" && textLangOne !== "" && textLangTwo !== "" && textLangThree == "" && textRole !== "" && textToolOne !== "") {
      container.dataset.level == textLevel &&
      (container.dataset.langOne == textLangOne || container.dataset.langTwo == textLangOne || container.dataset.langThree == textLangOne) &&
      (container.dataset.langOne == textLangTwo || container.dataset.langTwo == textLangTwo || container.dataset.langThree == textLangTwo) &&
      container.dataset.role == textRole &&
      (container.dataset.toolOne == textToolOne || container.dataset.toolTwo == textToolOne)
        ? container.classList.remove("hidden")
        : container.classList.add("hidden");
    }
  });
}
function handleClearAll() {
  handleClearRole();
  handleClearLevel();
  handleClearLangOne();
  handleClearLangTwo();
  handleClearLangThree();
  handleClearToolOne();
  handleClearToolTwo();
  let containers = document.querySelectorAll(".container");
  containers.forEach((container) => {
    container.classList.remove("hidden");
  });
}
