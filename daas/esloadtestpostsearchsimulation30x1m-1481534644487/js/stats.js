var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "9575",
        "ok": "9065",
        "ko": "510"
    },
    "minResponseTime": {
        "total": "85",
        "ok": "85",
        "ko": "175"
    },
    "maxResponseTime": {
        "total": "1713",
        "ok": "1713",
        "ko": "995"
    },
    "meanResponseTime": {
        "total": "187",
        "ok": "186",
        "ko": "212"
    },
    "standardDeviation": {
        "total": "76",
        "ok": "77",
        "ko": "69"
    },
    "percentiles1": {
        "total": "192",
        "ok": "190",
        "ko": "203"
    },
    "percentiles2": {
        "total": "211",
        "ok": "211",
        "ko": "209"
    },
    "percentiles3": {
        "total": "230",
        "ok": "231",
        "ko": "219"
    },
    "percentiles4": {
        "total": "484",
        "ok": "458",
        "ko": "611"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 9032,
        "percentage": 94
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 30,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 510,
        "percentage": 5
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "152.066",
        "ok": "143.967",
        "ko": "8.1"
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
        "total": "9575",
        "ok": "9065",
        "ko": "510"
    },
    "minResponseTime": {
        "total": "85",
        "ok": "85",
        "ko": "175"
    },
    "maxResponseTime": {
        "total": "1713",
        "ok": "1713",
        "ko": "995"
    },
    "meanResponseTime": {
        "total": "187",
        "ok": "186",
        "ko": "212"
    },
    "standardDeviation": {
        "total": "76",
        "ok": "77",
        "ko": "69"
    },
    "percentiles1": {
        "total": "192",
        "ok": "190",
        "ko": "203"
    },
    "percentiles2": {
        "total": "211",
        "ok": "211",
        "ko": "209"
    },
    "percentiles3": {
        "total": "230",
        "ok": "231",
        "ko": "219"
    },
    "percentiles4": {
        "total": "484",
        "ok": "458",
        "ko": "611"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 9032,
        "percentage": 94
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 30,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 510,
        "percentage": 5
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "152.066",
        "ok": "143.967",
        "ko": "8.1"
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
