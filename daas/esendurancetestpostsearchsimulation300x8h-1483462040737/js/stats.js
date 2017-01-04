var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "15239269",
        "ok": "13555605",
        "ko": "1683664"
    },
    "minResponseTime": {
        "total": "45",
        "ok": "47",
        "ko": "45"
    },
    "maxResponseTime": {
        "total": "60065",
        "ok": "45983",
        "ko": "60065"
    },
    "meanResponseTime": {
        "total": "566",
        "ok": "546",
        "ko": "728"
    },
    "standardDeviation": {
        "total": "1483",
        "ok": "1195",
        "ko": "2814"
    },
    "percentiles1": {
        "total": "273",
        "ok": "269",
        "ko": "302"
    },
    "percentiles2": {
        "total": "312",
        "ok": "306",
        "ko": "343"
    },
    "percentiles3": {
        "total": "1424",
        "ok": "1396",
        "ko": "1502"
    },
    "percentiles4": {
        "total": "3481",
        "ok": "3465",
        "ko": "7270"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 94323,
        "percentage": 1
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 11293156,
        "percentage": 74
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 2168126,
        "percentage": 14
    },
    "group4": {
        "name": "failed",
        "count": 1683664,
        "percentage": 11
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "527.955",
        "ok": "469.625",
        "ko": "58.329"
    }
},
contents: {
"req_esendurancetest-0ebf8": {
        type: "REQUEST",
        name: "EsEnduranceTestPostSearchSimulation300x8h",
path: "EsEnduranceTestPostSearchSimulation300x8h",
pathFormatted: "req_esendurancetest-0ebf8",
stats: {
    "name": "EsEnduranceTestPostSearchSimulation300x8h",
    "numberOfRequests": {
        "total": "15239269",
        "ok": "13555605",
        "ko": "1683664"
    },
    "minResponseTime": {
        "total": "45",
        "ok": "47",
        "ko": "45"
    },
    "maxResponseTime": {
        "total": "60065",
        "ok": "45983",
        "ko": "60065"
    },
    "meanResponseTime": {
        "total": "566",
        "ok": "546",
        "ko": "728"
    },
    "standardDeviation": {
        "total": "1483",
        "ok": "1195",
        "ko": "2814"
    },
    "percentiles1": {
        "total": "273",
        "ok": "269",
        "ko": "302"
    },
    "percentiles2": {
        "total": "312",
        "ok": "306",
        "ko": "343"
    },
    "percentiles3": {
        "total": "1424",
        "ok": "1396",
        "ko": "1502"
    },
    "percentiles4": {
        "total": "3481",
        "ok": "3465",
        "ko": "7270"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 94323,
        "percentage": 1
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 11293156,
        "percentage": 74
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 2168126,
        "percentage": 14
    },
    "group4": {
        "name": "failed",
        "count": 1683664,
        "percentage": 11
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "527.955",
        "ok": "469.625",
        "ko": "58.329"
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
