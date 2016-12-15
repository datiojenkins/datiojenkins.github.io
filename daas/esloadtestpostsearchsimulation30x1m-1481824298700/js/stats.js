var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "19576",
        "ok": "19423",
        "ko": "153"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "54",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "1134",
        "ok": "1134",
        "ko": "96"
    },
    "meanResponseTime": {
        "total": "91",
        "ok": "92",
        "ko": "58"
    },
    "standardDeviation": {
        "total": "38",
        "ok": "39",
        "ko": "10"
    },
    "percentiles1": {
        "total": "84",
        "ok": "84",
        "ko": "55"
    },
    "percentiles2": {
        "total": "95",
        "ok": "95",
        "ko": "65"
    },
    "percentiles3": {
        "total": "134",
        "ok": "134",
        "ko": "78"
    },
    "percentiles4": {
        "total": "172",
        "ok": "172",
        "ko": "89"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 19400,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 23,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 153,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "311.012",
        "ok": "308.581",
        "ko": "2.431"
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
        "total": "19576",
        "ok": "19423",
        "ko": "153"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "54",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "1134",
        "ok": "1134",
        "ko": "96"
    },
    "meanResponseTime": {
        "total": "91",
        "ok": "92",
        "ko": "58"
    },
    "standardDeviation": {
        "total": "38",
        "ok": "39",
        "ko": "10"
    },
    "percentiles1": {
        "total": "84",
        "ok": "84",
        "ko": "55"
    },
    "percentiles2": {
        "total": "95",
        "ok": "95",
        "ko": "65"
    },
    "percentiles3": {
        "total": "134",
        "ok": "134",
        "ko": "78"
    },
    "percentiles4": {
        "total": "172",
        "ok": "172",
        "ko": "89"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 19400,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 23,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 153,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "311.012",
        "ok": "308.581",
        "ko": "2.431"
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
