import PdfPreview from "../Pdf"
import pdf from "../../assets/java.pdf"
import { useEffect, useState } from "react";
import "./index.scss"
import { fetchArr } from "./fetch";


const words = {
    "words_result": [
        {
            "words": "6",
            "location": {
                "top": 12,
                "left": 30,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "2",
            "location": {
                "top": 12,
                "left": 92,
                "width": 17,
                "height": 25
            }
        },
        {
            "words": "8",
            "location": {
                "top": 13,
                "left": 157,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "4",
            "location": {
                "top": 13,
                "left": 221,
                "width": 17,
                "height": 25
            }
        },
        {
            "words": "6",
            "location": {
                "top": 12,
                "left": 285,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "7",
            "location": {
                "top": 13,
                "left": 350,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "8",
            "location": {
                "top": 13,
                "left": 414,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "3",
            "location": {
                "top": 13,
                "left": 477,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "3",
            "location": {
                "top": 12,
                "left": 541,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "2",
            "location": {
                "top": 12,
                "left": 605,
                "width": 17,
                "height": 25
            }
        },
        {
            "words": "5",
            "location": {
                "top": 77,
                "left": 29,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "7",
            "location": {
                "top": 77,
                "left": 93,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "2",
            "location": {
                "top": 76,
                "left": 157,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "7",
            "location": {
                "top": 77,
                "left": 221,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "1",
            "location": {
                "top": 77,
                "left": 286,
                "width": 15,
                "height": 25
            }
        },
        {
            "words": "6",
            "location": {
                "top": 76,
                "left": 350,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "5",
            "location": {
                "top": 77,
                "left": 413,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "3",
            "location": {
                "top": 76,
                "left": 477,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "9",
            "location": {
                "top": 76,
                "left": 542,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "4",
            "location": {
                "top": 77,
                "left": 605,
                "width": 17,
                "height": 25
            }
        },
        {
            "words": "5",
            "location": {
                "top": 141,
                "left": 29,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "1",
            "location": {
                "top": 141,
                "left": 94,
                "width": 15,
                "height": 25
            }
        },
        {
            "words": "2",
            "location": {
                "top": 140,
                "left": 157,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "2",
            "location": {
                "top": 140,
                "left": 221,
                "width": 17,
                "height": 26
            }
        },
        {
            "words": "8",
            "location": {
                "top": 140,
                "left": 285,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "6",
            "location": {
                "top": 140,
                "left": 350,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "3",
            "location": {
                "top": 140,
                "left": 413,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "4",
            "location": {
                "top": 141,
                "left": 477,
                "width": 17,
                "height": 25
            }
        },
        {
            "words": "3",
            "location": {
                "top": 140,
                "left": 542,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "6",
            "location": {
                "top": 140,
                "left": 606,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "1",
            "location": {
                "top": 205,
                "left": 30,
                "width": 15,
                "height": 25
            }
        },
        {
            "words": "2",
            "location": {
                "top": 205,
                "left": 93,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "9",
            "location": {
                "top": 205,
                "left": 157,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "9",
            "location": {
                "top": 205,
                "left": 221,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "2",
            "location": {
                "top": 205,
                "left": 285,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "2",
            "location": {
                "top": 205,
                "left": 349,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "7",
            "location": {
                "top": 205,
                "left": 414,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "6",
            "location": {
                "top": 205,
                "left": 478,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "8",
            "location": {
                "top": 204,
                "left": 542,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "1",
            "location": {
                "top": 205,
                "left": 606,
                "width": 15,
                "height": 26
            }
        },
        {
            "words": "1",
            "location": {
                "top": 269,
                "left": 30,
                "width": 15,
                "height": 25
            }
        },
        {
            "words": "8",
            "location": {
                "top": 269,
                "left": 93,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "2",
            "location": {
                "top": 269,
                "left": 157,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "8",
            "location": {
                "top": 269,
                "left": 221,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "4",
            "location": {
                "top": 269,
                "left": 285,
                "width": 17,
                "height": 25
            }
        },
        {
            "words": "6",
            "location": {
                "top": 269,
                "left": 350,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "9",
            "location": {
                "top": 269,
                "left": 414,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "2",
            "location": {
                "top": 269,
                "left": 477,
                "width": 17,
                "height": 25
            }
        },
        {
            "words": "2",
            "location": {
                "top": 269,
                "left": 541,
                "width": 17,
                "height": 25
            }
        },
        {
            "words": "1",
            "location": {
                "top": 269,
                "left": 606,
                "width": 15,
                "height": 25
            }
        },
        {
            "words": "2",
            "location": {
                "top": 333,
                "left": 28,
                "width": 17,
                "height": 26
            }
        },
        {
            "words": "7",
            "location": {
                "top": 333,
                "left": 93,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "8",
            "location": {
                "top": 333,
                "left": 157,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "2",
            "location": {
                "top": 333,
                "left": 221,
                "width": 17,
                "height": 25
            }
        },
        {
            "words": "3",
            "location": {
                "top": 333,
                "left": 285,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "6",
            "location": {
                "top": 333,
                "left": 350,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "4",
            "location": {
                "top": 333,
                "left": 412,
                "width": 18,
                "height": 24
            }
        },
        {
            "words": "4",
            "location": {
                "top": 333,
                "left": 477,
                "width": 17,
                "height": 24
            }
        },
        {
            "words": "9",
            "location": {
                "top": 333,
                "left": 542,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "4",
            "location": {
                "top": 333,
                "left": 605,
                "width": 17,
                "height": 25
            }
        },
        {
            "words": "3",
            "location": {
                "top": 396,
                "left": 29,
                "width": 17,
                "height": 26
            }
        },
        {
            "words": "2",
            "location": {
                "top": 397,
                "left": 92,
                "width": 17,
                "height": 26
            }
        },
        {
            "words": "2",
            "location": {
                "top": 397,
                "left": 157,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "5",
            "location": {
                "top": 397,
                "left": 221,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "7",
            "location": {
                "top": 397,
                "left": 285,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "7",
            "location": {
                "top": 397,
                "left": 350,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "9",
            "location": {
                "top": 397,
                "left": 414,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "9",
            "location": {
                "top": 397,
                "left": 478,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "5",
            "location": {
                "top": 398,
                "left": 542,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "5",
            "location": {
                "top": 397,
                "left": 606,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "9",
            "location": {
                "top": 461,
                "left": 29,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "8",
            "location": {
                "top": 461,
                "left": 93,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "7",
            "location": {
                "top": 461,
                "left": 157,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "8",
            "location": {
                "top": 461,
                "left": 221,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "6",
            "location": {
                "top": 461,
                "left": 285,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "3",
            "location": {
                "top": 461,
                "left": 349,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "2",
            "location": {
                "top": 461,
                "left": 413,
                "width": 17,
                "height": 26
            }
        },
        {
            "words": "2",
            "location": {
                "top": 461,
                "left": 477,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "9",
            "location": {
                "top": 461,
                "left": 542,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "4",
            "location": {
                "top": 461,
                "left": 605,
                "width": 17,
                "height": 25
            }
        },
        {
            "words": "5",
            "location": {
                "top": 526,
                "left": 29,
                "width": 17,
                "height": 25
            }
        },
        {
            "words": "7",
            "location": {
                "top": 525,
                "left": 93,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "6",
            "location": {
                "top": 525,
                "left": 157,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "6",
            "location": {
                "top": 525,
                "left": 221,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "6",
            "location": {
                "top": 525,
                "left": 285,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "6",
            "location": {
                "top": 525,
                "left": 350,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "8",
            "location": {
                "top": 525,
                "left": 414,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "8",
            "location": {
                "top": 525,
                "left": 478,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "8",
            "location": {
                "top": 525,
                "left": 542,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "4",
            "location": {
                "top": 526,
                "left": 605,
                "width": 17,
                "height": 25
            }
        },
        {
            "words": "9",
            "location": {
                "top": 589,
                "left": 29,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "3",
            "location": {
                "top": 589,
                "left": 93,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "7",
            "location": {
                "top": 589,
                "left": 157,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "3",
            "location": {
                "top": 589,
                "left": 221,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "4",
            "location": {
                "top": 590,
                "left": 285,
                "width": 17,
                "height": 24
            }
        },
        {
            "words": "9",
            "location": {
                "top": 589,
                "left": 349,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "1",
            "location": {
                "top": 590,
                "left": 414,
                "width": 15,
                "height": 25
            }
        },
        {
            "words": "7",
            "location": {
                "top": 589,
                "left": 478,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "7",
            "location": {
                "top": 589,
                "left": 542,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "9",
            "location": {
                "top": 589,
                "left": 606,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "1",
            "location": {
                "top": 653,
                "left": 30,
                "width": 15,
                "height": 25
            }
        },
        {
            "words": "4",
            "location": {
                "top": 653,
                "left": 92,
                "width": 18,
                "height": 25
            }
        },
        {
            "words": "4",
            "location": {
                "top": 653,
                "left": 157,
                "width": 17,
                "height": 25
            }
        },
        {
            "words": "7",
            "location": {
                "top": 653,
                "left": 221,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "4",
            "location": {
                "top": 653,
                "left": 285,
                "width": 17,
                "height": 25
            }
        },
        {
            "words": "7",
            "location": {
                "top": 653,
                "left": 350,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "1",
            "location": {
                "top": 653,
                "left": 414,
                "width": 15,
                "height": 25
            }
        },
        {
            "words": "4",
            "location": {
                "top": 653,
                "left": 477,
                "width": 17,
                "height": 25
            }
        },
        {
            "words": "5",
            "location": {
                "top": 653,
                "left": 542,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "5",
            "location": {
                "top": 653,
                "left": 605,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "6",
            "location": {
                "top": 717,
                "left": 29,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "7",
            "location": {
                "top": 718,
                "left": 93,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "1",
            "location": {
                "top": 718,
                "left": 158,
                "width": 14,
                "height": 25
            }
        },
        {
            "words": "1",
            "location": {
                "top": 718,
                "left": 222,
                "width": 15,
                "height": 25
            }
        },
        {
            "words": "5",
            "location": {
                "top": 718,
                "left": 285,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "8",
            "location": {
                "top": 717,
                "left": 350,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "9",
            "location": {
                "top": 717,
                "left": 413,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "9",
            "location": {
                "top": 718,
                "left": 478,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "6",
            "location": {
                "top": 717,
                "left": 542,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "7",
            "location": {
                "top": 718,
                "left": 606,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "5",
            "location": {
                "top": 782,
                "left": 29,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "3",
            "location": {
                "top": 781,
                "left": 93,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "2",
            "location": {
                "top": 781,
                "left": 157,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "4",
            "location": {
                "top": 782,
                "left": 221,
                "width": 17,
                "height": 25
            }
        },
        {
            "words": "7",
            "location": {
                "top": 782,
                "left": 285,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "1",
            "location": {
                "top": 782,
                "left": 350,
                "width": 14,
                "height": 25
            }
        },
        {
            "words": "8",
            "location": {
                "top": 782,
                "left": 414,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "3",
            "location": {
                "top": 781,
                "left": 477,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "3",
            "location": {
                "top": 781,
                "left": 542,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "4",
            "location": {
                "top": 782,
                "left": 605,
                "width": 17,
                "height": 25
            }
        },
        {
            "words": "2",
            "location": {
                "top": 846,
                "left": 28,
                "width": 17,
                "height": 25
            }
        },
        {
            "words": "9",
            "location": {
                "top": 846,
                "left": 93,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "7",
            "location": {
                "top": 846,
                "left": 157,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "7",
            "location": {
                "top": 846,
                "left": 221,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "1",
            "location": {
                "top": 846,
                "left": 286,
                "width": 15,
                "height": 25
            }
        },
        {
            "words": "8",
            "location": {
                "top": 846,
                "left": 350,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "7",
            "location": {
                "top": 846,
                "left": 414,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "9",
            "location": {
                "top": 846,
                "left": 477,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "1",
            "location": {
                "top": 846,
                "left": 542,
                "width": 15,
                "height": 25
            }
        },
        {
            "words": "2",
            "location": {
                "top": 846,
                "left": 605,
                "width": 17,
                "height": 25
            }
        },
        {
            "words": "3",
            "location": {
                "top": 909,
                "left": 29,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "4",
            "location": {
                "top": 910,
                "left": 92,
                "width": 18,
                "height": 25
            }
        },
        {
            "words": "2",
            "location": {
                "top": 910,
                "left": 157,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "6",
            "location": {
                "top": 909,
                "left": 221,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "3",
            "location": {
                "top": 909,
                "left": 285,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "6",
            "location": {
                "top": 909,
                "left": 350,
                "width": 16,
                "height": 26
            }
        },
        {
            "words": "8",
            "location": {
                "top": 910,
                "left": 414,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "9",
            "location": {
                "top": 910,
                "left": 478,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "2",
            "location": {
                "top": 910,
                "left": 541,
                "width": 17,
                "height": 25
            }
        },
        {
            "words": "5",
            "location": {
                "top": 910,
                "left": 605,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "1",
            "location": {
                "top": 973,
                "left": 30,
                "width": 15,
                "height": 25
            }
        },
        {
            "words": "9",
            "location": {
                "top": 974,
                "left": 93,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "9",
            "location": {
                "top": 974,
                "left": 157,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "3",
            "location": {
                "top": 974,
                "left": 221,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "5",
            "location": {
                "top": 974,
                "left": 285,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "5",
            "location": {
                "top": 974,
                "left": 349,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "1",
            "location": {
                "top": 974,
                "left": 414,
                "width": 14,
                "height": 25
            }
        },
        {
            "words": "9",
            "location": {
                "top": 974,
                "left": 478,
                "width": 16,
                "height": 25
            }
        },
        {
            "words": "5",
            "location": {
                "top": 974,
                "left": 542,
                "width": 16,
                "height": 24
            }
        },
        {
            "words": "6",
            "location": {
                "top": 974,
                "left": 606,
                "width": 16,
                "height": 25
            }
        }
    ],
    "words_result_num": 160,
    "log_id": "1786760107789331402"
}
let indexEnd = 1;

let twoMatrixValue: any = null
export function Web() {
    const [data, setData] = useState<any>([])
    const [allData, setAllData] = useState<any>([])
    const [matrixValue, setMatrixValue] = useState<any>(null)
    useEffect(() => {
        reload()
        // debugger
    }, [])
    const reload = async () => {
        getBase64Image("../../../assets/image.png").then(async (res) => {
            // debugger
            fetchArr(res).then((content: any) => {
                const resultArr = content.words_result
                // debugger
                // const data = convertTo2DArray(resultArr, 16, 10)
                const initArr: any = generateMatrix(16, 10, resultArr)
                setData(initArr)
            })
        })
        // const resultArr = words.words_result
        // // const data = convertTo2DArray(resultArr, 16, 10)
        // const initArr: any = generateMatrix(16, 10, resultArr)
        // // debugger
        // setData(initArr)
    }
    function convertTo2DArray(arr: any, rows: any, cols: any) {
        const result = [];
        let index = 0;

        for (let i = 0; i < rows; i++) {
            const row = [];

            for (let j = 0; j < cols; j++) {
                if (index < arr.length) {
                    row.push(arr[index]);
                    index++;
                } else {
                    row.push(null);
                }
            }

            result.push(row);
        }

        return result;
    }
    const getBase64Image = (src: any) => {
        return new Promise(resolve => {
            let xhr = new XMLHttpRequest()
            xhr.open('get', src, true)
            xhr.responseType = 'blob'
            xhr.onload = function () {
                if (this.status == 200) {
                    let blob = this.response
                    let oFileReader = new FileReader()
                    oFileReader.onloadend = function (e: any) {
                        const base64 = e.target.result
                        resolve(base64)
                    }
                    oFileReader.readAsDataURL(blob)
                }
            }
            xhr.send()
        })
    }
    function generateMatrix(rows: any, cols: any, intoMatrix?: any) {
        let matrix = [];
        if (intoMatrix?.length > 0) {
            const parseData = intoMatrix.map(v => {
                return { ...v, value: Number(v?.words), isSumTenArea: false }
            })
            matrix = convertTo2DArray(parseData, 16, 10)
        } else {
            for (let i = 0; i < rows; i++) {
                const row = [];
                for (let j = 0; j < cols; j++) {
                    const randomNum = Math.floor(Math.random() * 9) + 1;
                    row.push({ value: randomNum, isSumTenArea: false });
                }
                matrix.push(row);
            }
        }
        const aDD: any = []
        calculateSubmatrixSums(matrix, aDD)
        setAllData(aDD)
        // calculateSubmatrixSums(twoMatrixValue)
        // setMatrixValue(twoMatrixValue)
        return matrix;
    }
    function calculateSubmatrixSums(matrix: any, allDATA: any) {
        initArr(matrix)
        const copyMatrix = JSON.parse(JSON.stringify(matrix))
        const rows = matrix.length;
        const cols = matrix[0].length;

        // 创建一个辅助矩阵来保存每个位置的累积和
        // auxiliary[i][j] 表示以 matrix[i][j] 为右下角的子矩阵的和
        const auxiliary = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill({ value: 0, isSumTenArea: false }));

        // 计算累积和
        for (let i = 1; i <= rows; i++) {
            for (let j = 1; j <= cols; j++) {
                auxiliary[i][j] =
                {
                    value: auxiliary[i - 1][j].value
                        + auxiliary[i][j - 1].value
                        - auxiliary[i - 1][j - 1].value
                        + matrix[i - 1][j - 1].value,
                    isSumTenArea: false,
                };
            }
        }

        // 遍历所有子矩阵并计算它们的和
        for (let startRow = 0; startRow < rows; startRow++) {
            for (let startCol = 0; startCol < cols; startCol++) {
                for (let endRow = startRow; endRow < rows; endRow++) {
                    for (let endCol = startCol; endCol < cols; endCol++) {
                        const submatrixSum =
                            auxiliary[endRow + 1][endCol + 1].value -
                            auxiliary[startRow][endCol + 1].value -
                            auxiliary[endRow + 1][startCol].value +
                            auxiliary[startRow][startCol].value;
                        if (submatrixSum === 10) {
                            // result.push({
                            //     startCol, endCol,startRow, endRow
                            // })
                            // updateSummatrix(auxiliary, startRow, endRow, startCol, endCol, true)
                            

                            updateSubmatrix(matrix, startRow, endRow, startCol, endCol)
                            updateSubmatrix1(copyMatrix, startRow, endRow, startCol, endCol, 0)
                            // startRow = endRow
                            // startCol = endCol
                            console.log('子矩阵和：', submatrixSum, "开始列", startCol, endCol, "开始行", startRow, endRow);
                        }
                    }
                }
            }
        }
        // const oldAllData = JSON.parse(JSON.stringify(allDATA))
        indexEnd++;
        allDATA.push(matrix)
        // debugger
        // debugger
        if (indexEnd !== 9) {
            calculateSubmatrixSums(copyMatrix, allDATA)
        }
        // if (!twoMatrixValue) {
        //     twoMatrixValue = copyMatrix
        //     debugger
        // }
        // setMatrixValue(copyMatrix)

    }
    const initArr = (matrix: any) => {
        // debugger
        const rows = matrix.length;
        const cols = matrix[0].length;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                matrix[i][j] = {
                    value: matrix[i][j].value,
                    isSumTenArea: false,
                }
            }
        }
    }
    function updateSubmatrix(matrix: any, startRow: any, endRow: any, startCol: any, endCol: any, value?: any) {
        let isRepeat = false;
        for (let i = startRow; i <= endRow; i++) {
            for (let j = startCol; j <= endCol; j++) {
                if (matrix[i][j]?.isSumTenArea) {
                    isRepeat = true;
                }
            }
        }
        if (!isRepeat) {
            let color = getRandomColor()
            for (let i = startRow; i <= endRow; i++) {
                for (let j = startCol; j <= endCol; j++) {
                    matrix[i][j] = {
                        value: matrix[i][j].value,
                        isSumTenArea: true,
                        color,

                    };
                }
            }
        }

    }
    function updateSubmatrix1(matrix: any, startRow: any, endRow: any, startCol: any, endCol: any, value?: any) {
        let isRepeat = false;
        for (let i = startRow; i <= endRow; i++) {
            for (let j = startCol; j <= endCol; j++) {
                if (matrix[i][j]?.isSumTenArea === true) {
                    isRepeat = true;
                }
            }
        }
        if (!isRepeat) {
            // let color = getRandomColor()
            for (let i = startRow; i <= endRow; i++) {
                for (let j = startCol; j <= endCol; j++) {
                    matrix[i][j] = {
                        value: 0,
                        isSumTenArea: true,
                        // color,
                    };
                }
            }
        }

    }
    const colors = ['red', 'green', 'darkorange', 'blue'];
    let colorIndex = 0;

    function getRandomColor() {
        const color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
        return color;
    }


    return (

        <>
            {/* <div className="App">
                {data?.map((items: any) => {
                    return <div className="line-div">
                        {
                            items?.map((element: any) => <div className={element?.isSumTenArea ? "red" : ""} style={{ color: element?.color }}>
                                {element?.value}
                            </div>)
                        }
                    </div>
                })}

            </div> */}
            {/* {console.log(allData, "input")} */}

            {allData?.map((mains: any) => <div className="App">
                {mains?.map((items: any) => {
                    return <div className="line-div">
                        {
                            items?.map((element: any) => <div className={element?.isSumTenArea ? "red" : ""} style={{ background: element?.color, color: element?.color ? 'white' : "black" }}>
                                {element?.value}
                            </div>)
                        }
                    </div>
                })}
            </div>)}
            {/* <div className="App">
                {matrixValue && <>
                    {matrixValue?.map((items: any) => {
                        return <div className="line-div">
                            {
                                items?.map((element: any) => <div className={element?.isSumTenArea ? "red" : ""} style={{ color: element?.color }}>
                                    {element?.value}
                                </div>)
                            }
                        </div>
                    })}
                </>}
            </div> */}
        </>
    )
}

export default Web

