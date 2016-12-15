var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "33194",
        "ok": "0",
        "ko": "33194"
    },
    "minResponseTime": {
        "total": "39",
        "ok": "-",
        "ko": "39"
    },
    "maxResponseTime": {
        "total": "319",
        "ok": "-",
        "ko": "319"
    },
    "meanResponseTime": {
        "total": "53",
        "ok": "-",
        "ko": "53"
    },
    "standardDeviation": {
        "total": "9",
        "ok": "-",
        "ko": "9"
    },
    "percentiles1": {
        "total": "52",
        "ok": "-",
        "ko": "52"
    },
    "percentiles2": {
        "total": "55",
        "ok": "-",
        "ko": "55"
    },
    "percentiles3": {
        "total": "64",
        "ok": "-",
        "ko": "64"
    },
    "percentiles4": {
        "total": "95",
        "ok": "-",
        "ko": "95"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
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
        "count": 33194,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "527.433",
        "ok": "-",
        "ko": "527.433"
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
        "total": "33194",
        "ok": "0",
        "ko": "33194"
    },
    "minResponseTime": {
        "total": "39",
        "ok": "-",
        "ko": "39"
    },
    "maxResponseTime": {
        "total": "319",
        "ok": "-",
        "ko": "319"
    },
    "meanResponseTime": {
        "total": "53",
        "ok": "-",
        "ko": "53"
    },
    "standardDeviation": {
        "total": "9",
        "ok": "-",
        "ko": "9"
    },
    "percentiles1": {
        "total": "52",
        "ok": "-",
        "ko": "52"
    },
    "percentiles2": {
        "total": "55",
        "ok": "-",
        "ko": "55"
    },
    "percentiles3": {
        "total": "64",
        "ok": "-",
        "ko": "64"
    },
    "percentiles4": {
        "total": "95",
        "ok": "-",
        "ko": "95"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
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
        "count": 33194,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "527.433",
        "ok": "-",
        "ko": "527.433"
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
