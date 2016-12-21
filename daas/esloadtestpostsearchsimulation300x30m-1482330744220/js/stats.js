var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1073535",
        "ok": "860265",
        "ko": "213270"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "46",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "60047",
        "ok": "34292",
        "ko": "60047"
    },
    "meanResponseTime": {
        "total": "503",
        "ok": "472",
        "ko": "628"
    },
    "standardDeviation": {
        "total": "1232",
        "ok": "933",
        "ko": "2029"
    },
    "percentiles1": {
        "total": "255",
        "ok": "237",
        "ko": "294"
    },
    "percentiles2": {
        "total": "318",
        "ok": "304",
        "ko": "366"
    },
    "percentiles3": {
        "total": "1353",
        "ok": "1323",
        "ko": "1490"
    },
    "percentiles4": {
        "total": "3407",
        "ok": "3359",
        "ko": "3582"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 129736,
        "percentage": 12
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 614893,
        "percentage": 57
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 115636,
        "percentage": 11
    },
    "group4": {
        "name": "failed",
        "count": 213270,
        "percentage": 20
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "578.622",
        "ok": "463.672",
        "ko": "114.95"
    }
},
contents: {
"req_esloadtestposts-7b444": {
        type: "REQUEST",
        name: "EsLoadTestPostSearchSimulation300x30m",
path: "EsLoadTestPostSearchSimulation300x30m",
pathFormatted: "req_esloadtestposts-7b444",
stats: {
    "name": "EsLoadTestPostSearchSimulation300x30m",
    "numberOfRequests": {
        "total": "1073535",
        "ok": "860265",
        "ko": "213270"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "46",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "60047",
        "ok": "34292",
        "ko": "60047"
    },
    "meanResponseTime": {
        "total": "503",
        "ok": "472",
        "ko": "628"
    },
    "standardDeviation": {
        "total": "1232",
        "ok": "933",
        "ko": "2029"
    },
    "percentiles1": {
        "total": "255",
        "ok": "237",
        "ko": "294"
    },
    "percentiles2": {
        "total": "318",
        "ok": "304",
        "ko": "366"
    },
    "percentiles3": {
        "total": "1353",
        "ok": "1323",
        "ko": "1490"
    },
    "percentiles4": {
        "total": "3407",
        "ok": "3359",
        "ko": "3582"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 129736,
        "percentage": 12
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 614893,
        "percentage": 57
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 115636,
        "percentage": 11
    },
    "group4": {
        "name": "failed",
        "count": 213270,
        "percentage": 20
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "578.622",
        "ok": "463.672",
        "ko": "114.95"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
