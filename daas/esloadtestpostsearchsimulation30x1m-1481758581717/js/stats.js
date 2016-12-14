var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2604",
        "ok": "1",
        "ko": "2603"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "238",
        "ko": "41"
    },
    "maxResponseTime": {
        "total": "238",
        "ok": "238",
        "ko": "186"
    },
    "meanResponseTime": {
        "total": "56",
        "ok": "238",
        "ko": "56"
    },
    "standardDeviation": {
        "total": "12",
        "ok": "0",
        "ko": "11"
    },
    "percentiles1": {
        "total": "54",
        "ok": "238",
        "ko": "54"
    },
    "percentiles2": {
        "total": "61",
        "ok": "238",
        "ko": "61"
    },
    "percentiles3": {
        "total": "74",
        "ok": "238",
        "ko": "74"
    },
    "percentiles4": {
        "total": "108",
        "ok": "238",
        "ko": "107"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
        "percentage": 0
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
        "count": 2603,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "326.439",
        "ok": "0.125",
        "ko": "326.313"
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
        "total": "2604",
        "ok": "1",
        "ko": "2603"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "238",
        "ko": "41"
    },
    "maxResponseTime": {
        "total": "238",
        "ok": "238",
        "ko": "186"
    },
    "meanResponseTime": {
        "total": "56",
        "ok": "238",
        "ko": "56"
    },
    "standardDeviation": {
        "total": "12",
        "ok": "0",
        "ko": "11"
    },
    "percentiles1": {
        "total": "54",
        "ok": "238",
        "ko": "54"
    },
    "percentiles2": {
        "total": "61",
        "ok": "238",
        "ko": "61"
    },
    "percentiles3": {
        "total": "74",
        "ok": "238",
        "ko": "74"
    },
    "percentiles4": {
        "total": "108",
        "ok": "238",
        "ko": "107"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
        "percentage": 0
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
        "count": 2603,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "326.439",
        "ok": "0.125",
        "ko": "326.313"
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
