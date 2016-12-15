var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "261091",
        "ok": "64051",
        "ko": "197040"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "53",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "60012",
        "ok": "34457",
        "ko": "60012"
    },
    "meanResponseTime": {
        "total": "349",
        "ok": "570",
        "ko": "277"
    },
    "standardDeviation": {
        "total": "2663",
        "ok": "1593",
        "ko": "2925"
    },
    "percentiles1": {
        "total": "90",
        "ok": "366",
        "ko": "76"
    },
    "percentiles2": {
        "total": "204",
        "ok": "390",
        "ko": "96"
    },
    "percentiles3": {
        "total": "417",
        "ok": "1384",
        "ko": "154"
    },
    "percentiles4": {
        "total": "3162",
        "ok": "7392",
        "ko": "3074"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 58475,
        "percentage": 22
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1157,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4419,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 197040,
        "percentage": 75
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "753.603",
        "ok": "184.874",
        "ko": "568.729"
    }
},
contents: {
"req_esloadtestposts-7b444": {
        type: "REQUEST",
        name: "EsLoadTestPostSearchSimulation300x30m",
path: "EsLoadTestPostSearchSimulation300x30m",
pathFormatted: "req_esloadtestposts-7b444",
stats: {
    "name": "EsLoadTestPostSearchSimulation300x30m",
    "numberOfRequests": {
        "total": "261091",
        "ok": "64051",
        "ko": "197040"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "53",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "60012",
        "ok": "34457",
        "ko": "60012"
    },
    "meanResponseTime": {
        "total": "349",
        "ok": "570",
        "ko": "277"
    },
    "standardDeviation": {
        "total": "2663",
        "ok": "1593",
        "ko": "2925"
    },
    "percentiles1": {
        "total": "90",
        "ok": "366",
        "ko": "76"
    },
    "percentiles2": {
        "total": "205",
        "ok": "390",
        "ko": "96"
    },
    "percentiles3": {
        "total": "417",
        "ok": "1384",
        "ko": "154"
    },
    "percentiles4": {
        "total": "3167",
        "ok": "7392",
        "ko": "3074"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 58475,
        "percentage": 22
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1157,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4419,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 197040,
        "percentage": 75
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "753.603",
        "ok": "184.874",
        "ko": "568.729"
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
