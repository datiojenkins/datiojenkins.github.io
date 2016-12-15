var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "18725",
        "ok": "16708",
        "ko": "2017"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "53",
        "ko": "41"
    },
    "maxResponseTime": {
        "total": "2038",
        "ok": "2038",
        "ko": "1066"
    },
    "meanResponseTime": {
        "total": "95",
        "ok": "99",
        "ko": "69"
    },
    "standardDeviation": {
        "total": "90",
        "ok": "86",
        "ko": "118"
    },
    "percentiles1": {
        "total": "84",
        "ok": "85",
        "ko": "52"
    },
    "percentiles2": {
        "total": "94",
        "ok": "96",
        "ko": "57"
    },
    "percentiles3": {
        "total": "141",
        "ok": "142",
        "ko": "74"
    },
    "percentiles4": {
        "total": "357",
        "ok": "346",
        "ko": "1047"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 16636,
        "percentage": 89
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 46,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 26,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 2017,
        "percentage": 11
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "297.392",
        "ok": "265.358",
        "ko": "32.034"
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
        "total": "18725",
        "ok": "16708",
        "ko": "2017"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "53",
        "ko": "41"
    },
    "maxResponseTime": {
        "total": "2038",
        "ok": "2038",
        "ko": "1066"
    },
    "meanResponseTime": {
        "total": "95",
        "ok": "99",
        "ko": "69"
    },
    "standardDeviation": {
        "total": "90",
        "ok": "86",
        "ko": "118"
    },
    "percentiles1": {
        "total": "84",
        "ok": "85",
        "ko": "52"
    },
    "percentiles2": {
        "total": "94",
        "ok": "96",
        "ko": "57"
    },
    "percentiles3": {
        "total": "141",
        "ok": "142",
        "ko": "74"
    },
    "percentiles4": {
        "total": "357",
        "ok": "346",
        "ko": "1047"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 16636,
        "percentage": 89
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 46,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 26,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 2017,
        "percentage": 11
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "297.392",
        "ok": "265.358",
        "ko": "32.034"
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
