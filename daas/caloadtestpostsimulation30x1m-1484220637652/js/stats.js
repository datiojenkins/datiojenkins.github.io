var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20009",
        "ok": "20002",
        "ko": "7"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "41",
        "ko": "25831"
    },
    "maxResponseTime": {
        "total": "26304",
        "ok": "26304",
        "ko": "26291"
    },
    "meanResponseTime": {
        "total": "215",
        "ok": "206",
        "ko": "26053"
    },
    "standardDeviation": {
        "total": "2004",
        "ok": "1946",
        "ko": "208"
    },
    "percentiles1": {
        "total": "58",
        "ok": "57",
        "ko": "25992"
    },
    "percentiles2": {
        "total": "65",
        "ok": "64",
        "ko": "26286"
    },
    "percentiles3": {
        "total": "75",
        "ok": "75",
        "ko": "26290"
    },
    "percentiles4": {
        "total": "122",
        "ok": "121",
        "ko": "26290"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 19888,
        "percentage": 99
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 113,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 7,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "137.633",
        "ok": "137.585",
        "ko": "0.048"
    }
},
contents: {
"req_caloadtestposts-4ee46": {
        type: "REQUEST",
        name: "CaLoadTestPostSimulation30x1m",
path: "CaLoadTestPostSimulation30x1m",
pathFormatted: "req_caloadtestposts-4ee46",
stats: {
    "name": "CaLoadTestPostSimulation30x1m",
    "numberOfRequests": {
        "total": "20009",
        "ok": "20002",
        "ko": "7"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "41",
        "ko": "25831"
    },
    "maxResponseTime": {
        "total": "26304",
        "ok": "26304",
        "ko": "26291"
    },
    "meanResponseTime": {
        "total": "215",
        "ok": "206",
        "ko": "26053"
    },
    "standardDeviation": {
        "total": "2004",
        "ok": "1946",
        "ko": "208"
    },
    "percentiles1": {
        "total": "58",
        "ok": "58",
        "ko": "25992"
    },
    "percentiles2": {
        "total": "65",
        "ok": "65",
        "ko": "26286"
    },
    "percentiles3": {
        "total": "75",
        "ok": "75",
        "ko": "26290"
    },
    "percentiles4": {
        "total": "122",
        "ok": "121",
        "ko": "26290"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 19888,
        "percentage": 99
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 113,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 7,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "137.633",
        "ok": "137.585",
        "ko": "0.048"
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
