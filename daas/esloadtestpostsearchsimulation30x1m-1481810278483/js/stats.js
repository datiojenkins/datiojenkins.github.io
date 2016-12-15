var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "19224",
        "ok": "17560",
        "ko": "1664"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "53",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "1122",
        "ok": "1122",
        "ko": "330"
    },
    "meanResponseTime": {
        "total": "93",
        "ok": "96",
        "ko": "62"
    },
    "standardDeviation": {
        "total": "52",
        "ok": "53",
        "ko": "17"
    },
    "percentiles1": {
        "total": "85",
        "ok": "87",
        "ko": "56"
    },
    "percentiles2": {
        "total": "98",
        "ok": "100",
        "ko": "70"
    },
    "percentiles3": {
        "total": "135",
        "ok": "136",
        "ko": "97"
    },
    "percentiles4": {
        "total": "218",
        "ok": "230",
        "ko": "118"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 17519,
        "percentage": 91
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 41,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1664,
        "percentage": 9
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "305.342",
        "ok": "278.912",
        "ko": "26.43"
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
        "total": "19224",
        "ok": "17560",
        "ko": "1664"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "53",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "1122",
        "ok": "1122",
        "ko": "330"
    },
    "meanResponseTime": {
        "total": "93",
        "ok": "96",
        "ko": "62"
    },
    "standardDeviation": {
        "total": "52",
        "ok": "53",
        "ko": "17"
    },
    "percentiles1": {
        "total": "85",
        "ok": "87",
        "ko": "55"
    },
    "percentiles2": {
        "total": "98",
        "ok": "100",
        "ko": "70"
    },
    "percentiles3": {
        "total": "135",
        "ok": "136",
        "ko": "97"
    },
    "percentiles4": {
        "total": "218",
        "ok": "230",
        "ko": "118"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 17519,
        "percentage": 91
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 41,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1664,
        "percentage": 9
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "305.342",
        "ok": "278.912",
        "ko": "26.43"
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
