{
    "targets": 
    [
        {
            "target_name": "GPIO",

            "include_dirs" : 
            [
                "src",
                "<!(node -e \"require('nan')\")"
            ],
            
            "libraries": 
            [
                "-lwiringPi"
            ],

            "sources": 
            [
                "main.cpp"
            ]
        }
    ]
}