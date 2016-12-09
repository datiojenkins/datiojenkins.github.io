var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "22174",
        "ok": "18390",
        "ko": "3784"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "48",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "1289",
        "ok": "1289",
        "ko": "428"
    },
    "meanResponseTime": {
        "total": "81",
        "ok": "85",
        "ko": "59"
    },
    "standardDeviation": {
        "total": "54",
        "ok": "57",
        "ko": "24"
    },
    "percentiles1": {
        "total": "65",
        "ok": "68",
        "ko": "50"
    },
    "percentiles2": {
        "total": "85",
        "ok": "90",
        "ko": "60"
    },
    "percentiles3": {
        "total": "165",
        "ok": "173",
        "ko": "117"
    },
    "percentiles4": {
        "total": "223",
        "ok": "228",
        "ko": "148"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 18357,
        "percentage": 83
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 31,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 3784,
        "percentage": 17
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "352.181",
        "ok": "292.081",
        "ko": "60.1"
    }
},
contents: {
"req_esloadtestposts-79439": {
        type: "REQUEST",
        name: "EsLoadTestPostSearchSimulation30x1m",
path: "EsLoadTestPostSearchSimulation30x1m",
pathFormatted: "req_esloadtestposts-79439",
stats: {
    "name": "EsLoadTestPostSearchSimulation30x1m",
    "numberOfRequests": {
        "total": "22174",
        "ok": "18390",
        "ko": "3784"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "48",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "1289",
        "ok": "1289",
        "ko": "428"
    },
    "meanResponseTime": {
        "total": "81",
        "ok": "85",
        "ko": "59"
    },
    "standardDeviation": {
        "total": "54",
        "ok": "57",
        "ko": "24"
    },
    "percentiles1": {
        "total": "65",
        "ok": "68",
        "ko": "50"
    },
    "percentiles2": {
        "total": "85",
        "ok": "90",
        "ko": "59"
    },
    "percentiles3": {
        "total": "165",
        "ok": "173",
        "ko": "117"
    },
    "percentiles4": {
        "total": "223",
        "ok": "228",
        "ko": "148"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 18357,
        "percentage": 83
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 31,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 3784,
        "percentage": 17
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "352.181",
        "ok": "292.081",
        "ko": "60.1"
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
