var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "23467",
        "ok": "23081",
        "ko": "386"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "48",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "324",
        "ok": "324",
        "ko": "93"
    },
    "meanResponseTime": {
        "total": "76",
        "ok": "77",
        "ko": "52"
    },
    "standardDeviation": {
        "total": "25",
        "ok": "24",
        "ko": "9"
    },
    "percentiles1": {
        "total": "67",
        "ok": "67",
        "ko": "50"
    },
    "percentiles2": {
        "total": "86",
        "ok": "86",
        "ko": "53"
    },
    "percentiles3": {
        "total": "128",
        "ok": "129",
        "ko": "72"
    },
    "percentiles4": {
        "total": "159",
        "ok": "159",
        "ko": "88"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 23081,
        "percentage": 98
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 386,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "372.735",
        "ok": "366.604",
        "ko": "6.131"
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
        "total": "23467",
        "ok": "23081",
        "ko": "386"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "48",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "324",
        "ok": "324",
        "ko": "93"
    },
    "meanResponseTime": {
        "total": "76",
        "ok": "77",
        "ko": "52"
    },
    "standardDeviation": {
        "total": "25",
        "ok": "24",
        "ko": "9"
    },
    "percentiles1": {
        "total": "67",
        "ok": "67",
        "ko": "50"
    },
    "percentiles2": {
        "total": "86",
        "ok": "86",
        "ko": "53"
    },
    "percentiles3": {
        "total": "128",
        "ok": "129",
        "ko": "72"
    },
    "percentiles4": {
        "total": "159",
        "ok": "159",
        "ko": "88"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 23081,
        "percentage": 98
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 386,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "372.735",
        "ok": "366.604",
        "ko": "6.131"
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
