var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "32603",
        "ok": "1647",
        "ko": "30956"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "55",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "368",
        "ok": "184",
        "ko": "368"
    },
    "meanResponseTime": {
        "total": "54",
        "ok": "81",
        "ko": "53"
    },
    "standardDeviation": {
        "total": "10",
        "ok": "11",
        "ko": "8"
    },
    "percentiles1": {
        "total": "52",
        "ok": "81",
        "ko": "52"
    },
    "percentiles2": {
        "total": "57",
        "ok": "87",
        "ko": "55"
    },
    "percentiles3": {
        "total": "75",
        "ok": "101",
        "ko": "64"
    },
    "percentiles4": {
        "total": "98",
        "ok": "120",
        "ko": "92"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1647,
        "percentage": 5
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
        "count": 30956,
        "percentage": 95
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "517.878",
        "ok": "26.162",
        "ko": "491.716"
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
        "total": "32603",
        "ok": "1647",
        "ko": "30956"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "55",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "368",
        "ok": "184",
        "ko": "368"
    },
    "meanResponseTime": {
        "total": "54",
        "ok": "81",
        "ko": "53"
    },
    "standardDeviation": {
        "total": "10",
        "ok": "11",
        "ko": "8"
    },
    "percentiles1": {
        "total": "52",
        "ok": "81",
        "ko": "52"
    },
    "percentiles2": {
        "total": "57",
        "ok": "87",
        "ko": "55"
    },
    "percentiles3": {
        "total": "75",
        "ok": "101",
        "ko": "64"
    },
    "percentiles4": {
        "total": "98",
        "ok": "120",
        "ko": "92"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1647,
        "percentage": 5
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
        "count": 30956,
        "percentage": 95
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "517.878",
        "ok": "26.162",
        "ko": "491.716"
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
