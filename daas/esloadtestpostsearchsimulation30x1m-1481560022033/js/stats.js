var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "19440",
        "ok": "19274",
        "ko": "166"
    },
    "minResponseTime": {
        "total": "39",
        "ok": "50",
        "ko": "39"
    },
    "maxResponseTime": {
        "total": "1139",
        "ok": "1139",
        "ko": "113"
    },
    "meanResponseTime": {
        "total": "92",
        "ok": "92",
        "ko": "47"
    },
    "standardDeviation": {
        "total": "55",
        "ok": "55",
        "ko": "10"
    },
    "percentiles1": {
        "total": "85",
        "ok": "85",
        "ko": "44"
    },
    "percentiles2": {
        "total": "93",
        "ok": "93",
        "ko": "46"
    },
    "percentiles3": {
        "total": "126",
        "ok": "126",
        "ko": "68"
    },
    "percentiles4": {
        "total": "155",
        "ok": "155",
        "ko": "94"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 19182,
        "percentage": 99
    },
    "group2": {
        "name": "200 ms < t < 500 ms",
        "count": 32,
        "percentage": 0
    },
    "group3": {
        "name": "t > 500 ms",
        "count": 60,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 166,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "308.934",
        "ok": "306.296",
        "ko": "2.638"
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
        "total": "19440",
        "ok": "19274",
        "ko": "166"
    },
    "minResponseTime": {
        "total": "39",
        "ok": "50",
        "ko": "39"
    },
    "maxResponseTime": {
        "total": "1139",
        "ok": "1139",
        "ko": "113"
    },
    "meanResponseTime": {
        "total": "92",
        "ok": "92",
        "ko": "47"
    },
    "standardDeviation": {
        "total": "55",
        "ok": "55",
        "ko": "10"
    },
    "percentiles1": {
        "total": "84",
        "ok": "85",
        "ko": "44"
    },
    "percentiles2": {
        "total": "93",
        "ok": "93",
        "ko": "46"
    },
    "percentiles3": {
        "total": "126",
        "ok": "126",
        "ko": "68"
    },
    "percentiles4": {
        "total": "155",
        "ok": "155",
        "ko": "94"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 19182,
        "percentage": 99
    },
    "group2": {
        "name": "200 ms < t < 500 ms",
        "count": 32,
        "percentage": 0
    },
    "group3": {
        "name": "t > 500 ms",
        "count": 60,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 166,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "308.934",
        "ok": "306.296",
        "ko": "2.638"
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
