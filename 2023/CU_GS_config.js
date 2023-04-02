var config_data = `
{
  "enable_google_sheets": "true",
  "title": "4188 Scouting PASS 2023",
  "page_title": "Charged Up",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Name",
      "gsCol": "name",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "gsCol": "event",
      "code": "e",
      "type": "event",
      "defaultValue": "Pre Scouting",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Event",
      "gsCol": "Level",
      "code": "l",
      "type": "level",
      "size": 10,
      "maxSize": 25,
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "gsCol": "number",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    
    },
    { "name": "Team #",
      "code": "t",
      "gsCol": "teamNumber",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "gsCol": "autoStartingLocation",
      "type": "field_image",
      "filename": "2023/field_image.png",
      "clickRestriction": "one",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Auto Scoring",
      "code": "asg",
      "gsCol": "autoScoringGrid",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true"
    },
    { "name": "Crossed Charging Station",
      "code": "acs",
      "gsCol": "autoCrossedCharginStation",
      "type": "bool"
    },
    { "name": "Mobility?",
      "code": "am",
      "gsCol": "autoMobility",
      "type": "bool"
    },
    { "name": "Docked",
      "code": "ad",
      "gsCol": "autoDocked",
      "type":"radio",
      "choices": {
        "d": "Docked (not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "teleop": [
    { "name": "Cycle Timer",
      "code": "tct",
      "gsCol": "cycleTimes",
      "type": "cycle"
    },
    { "name": "Grid Scoring",
      "code": "tsg",
      "gsCol": "gridScoring",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true",
      "cycleTimer": "tct"
    },
    { "name": "Feeder Count<br>(Fed another bot)",
      "code": "tfc",
      "gsCol": "feedCount",
      "type": "counter"
    },
    { "name": "Was Defended",
      "code": "wd",
      "gsCol": "wasDefended",
      "type": "bool"
    },
    { "name": "Who Defended this bot<br>(Team #)",
      "code": "who",
      "gsCol": "defenderTeamNum",
      "type": "text"
    },
    { "name": "Smart Placement<br>(creates Links)",
      "code": "lnk",
      "gsCol": "smartPlacement",
      "type": "bool"
    },
    { "name": "Floor Pick UP",
      "code": "fpu",
      "gsCol": "floorPickUp",
      "type": "radio",
      "choices": {
        "o": "Cone<br>",
        "u": "Cube<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Docking Timer",
      "code": "dt",
      "gsCol": "dockingTime",
      "type": "timer"
    },
    { "name": "Final Status",
      "code": "fs",
      "gsCol": "endgameStatus",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "d": "Docked (Not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Total # of alliance<br>robots docked/engaged",
      "code": "dn",
      "gsCol": "numOfRobotsDocked",
      "type": "counter"
    }
  ],
  "postmatch": [
       { "name": "Links Scored",
      "code": "ls",
      "gsCol": "linksScored",
      "type": "counter"
    },
    
     { "name": "Swerve drive?",
      "code": "sd",
      "gsCol": "swerveDrive",
      "type": "bool"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "gsCol": "diedOrImmobilized",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "gsCol": "tippy",
      "type": "bool"
    },
    { "name": "Dropped Cones (>2)",
      "code": "dc",
      "gsCol": "droppedCones",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "gsCol": "goodPartners",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "gsCol": "comments",
      "type": "text",
      "size": 30,
      "maxSize": 150
    }
  ]
}`;
