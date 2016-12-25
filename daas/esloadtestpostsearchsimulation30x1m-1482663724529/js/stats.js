var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "56207",
        "ok": "55978",
        "ko": "229"
    },
    "minResponseTime": {
        "total": "47",
        "ok": "47",
        "ko": "50"
    },
    "maxResponseTime": {
        "total": "559",
        "ok": "559",
        "ko": "113"
    },
    "meanResponseTime": {
        "total": "63",
        "ok": "63",
        "ko": "69"
    },
    "standardDeviation": {
        "total": "14",
        "ok": "14",
        "ko": "9"
    },
    "percentiles1": {
        "total": "61",
        "ok": "60",
        "ko": "68"
    },
    "percentiles2": {
        "total": "66",
        "ok": "66",
        "ko": "74"
    },
    "percentiles3": {
        "total": "80",
        "ok": "80",
        "ko": "83"
    },
    "percentiles4": {
        "total": "118",
        "ok": "118",
        "ko": "104"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 55921,
        "percentage": 99
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 57,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 229,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "457.254",
        "ok": "455.391",
        "ko": "1.863"
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
        "total": "56207",
        "ok": "55978",
        "ko": "229"
    },
    "minResponseTime": {
        "total": "47",
        "ok": "47",
        "ko": "50"
    },
    "maxResponseTime": {
        "total": "559",
        "ok": "559",
        "ko": "113"
    },
    "meanResponseTime": {
        "total": "63",
        "ok": "63",
        "ko": "69"
    },
    "standardDeviation": {
        "total": "14",
        "ok": "14",
        "ko": "9"
    },
    "percentiles1": {
        "total": "61",
        "ok": "61",
        "ko": "68"
    },
    "percentiles2": {
        "total": "66",
        "ok": "66",
        "ko": "74"
    },
    "percentiles3": {
        "total": "80",
        "ok": "80",
        "ko": "83"
    },
    "percentiles4": {
        "total": "118",
        "ok": "118",
        "ko": "104"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 55921,
        "percentage": 99
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 57,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 229,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "457.254",
        "ok": "455.391",
        "ko": "1.863"
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
