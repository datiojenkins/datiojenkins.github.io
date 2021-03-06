var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20107",
        "ok": "17636",
        "ko": "2471"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "56",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "1158",
        "ok": "1158",
        "ko": "133"
    },
    "meanResponseTime": {
        "total": "89",
        "ok": "94",
        "ko": "53"
    },
    "standardDeviation": {
        "total": "47",
        "ok": "48",
        "ko": "8"
    },
    "percentiles1": {
        "total": "84",
        "ok": "86",
        "ko": "52"
    },
    "percentiles2": {
        "total": "95",
        "ok": "98",
        "ko": "55"
    },
    "percentiles3": {
        "total": "132",
        "ok": "135",
        "ko": "65"
    },
    "percentiles4": {
        "total": "174",
        "ok": "179",
        "ko": "101"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 17605,
        "percentage": 88
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 31,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 2471,
        "percentage": 12
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "319.524",
        "ok": "280.257",
        "ko": "39.267"
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
        "total": "20107",
        "ok": "17636",
        "ko": "2471"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "56",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "1158",
        "ok": "1158",
        "ko": "133"
    },
    "meanResponseTime": {
        "total": "89",
        "ok": "94",
        "ko": "53"
    },
    "standardDeviation": {
        "total": "47",
        "ok": "48",
        "ko": "8"
    },
    "percentiles1": {
        "total": "84",
        "ok": "86",
        "ko": "52"
    },
    "percentiles2": {
        "total": "95",
        "ok": "98",
        "ko": "55"
    },
    "percentiles3": {
        "total": "132",
        "ok": "135",
        "ko": "65"
    },
    "percentiles4": {
        "total": "174",
        "ok": "179",
        "ko": "101"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 17605,
        "percentage": 88
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 31,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 2471,
        "percentage": 12
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "319.524",
        "ok": "280.257",
        "ko": "39.267"
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
