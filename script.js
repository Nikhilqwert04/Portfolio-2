let tests = document.querySelectorAll(".sample1");

tests.forEach((test)=> {
    test.addEventListener("mouseover", function(){
        test.classList.add(
            "transition-all",
            "duration-150",
            "hover:border-b-2",
            "border-[#cfff45]",
            "hover:text-white",
            "hover:text-lg",
        );
    });
});
