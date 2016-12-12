var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "19433",
        "ok": "19411",
        "ko": "22"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "49",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "1100",
        "ok": "1100",
        "ko": "104"
    },
    "meanResponseTime": {
        "total": "92",
        "ok": "92",
        "ko": "56"
    },
    "standardDeviation": {
        "total": "49",
        "ok": "49",
        "ko": "22"
    },
    "percentiles1": {
        "total": "84",
        "ok": "84",
        "ko": "45"
    },
    "percentiles2": {
        "total": "94",
        "ok": "94",
        "ko": "57"
    },
    "percentiles3": {
        "total": "131",
        "ok": "131",
        "ko": "99"
    },
    "percentiles4": {
        "total": "164",
        "ok": "164",
        "ko": "103"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 19367,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 44,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 22,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "308.676",
        "ok": "308.326",
        "ko": "0.349"
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
        "total": "19433",
        "ok": "19411",
        "ko": "22"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "49",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "1100",
        "ok": "1100",
        "ko": "104"
    },
    "meanResponseTime": {
        "total": "92",
        "ok": "92",
        "ko": "56"
    },
    "standardDeviation": {
        "total": "49",
        "ok": "49",
        "ko": "22"
    },
    "percentiles1": {
        "total": "84",
        "ok": "84",
        "ko": "45"
    },
    "percentiles2": {
        "total": "94",
        "ok": "94",
        "ko": "57"
    },
    "percentiles3": {
        "total": "131",
        "ok": "131",
        "ko": "99"
    },
    "percentiles4": {
        "total": "164",
        "ok": "164",
        "ko": "103"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 19367,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 44,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 22,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "308.676",
        "ok": "308.326",
        "ko": "0.349"
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
