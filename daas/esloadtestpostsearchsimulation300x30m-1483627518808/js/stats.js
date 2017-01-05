var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1013200",
        "ok": "856306",
        "ko": "156894"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "49",
        "ko": "9"
    },
    "maxResponseTime": {
        "total": "60059",
        "ok": "32001",
        "ko": "60059"
    },
    "meanResponseTime": {
        "total": "533",
        "ok": "499",
        "ko": "715"
    },
    "standardDeviation": {
        "total": "1288",
        "ok": "1022",
        "ko": "2230"
    },
    "percentiles1": {
        "total": "258",
        "ok": "249",
        "ko": "324"
    },
    "percentiles2": {
        "total": "317",
        "ok": "289",
        "ko": "370"
    },
    "percentiles3": {
        "total": "1361",
        "ok": "1316",
        "ko": "1546"
    },
    "percentiles4": {
        "total": "3438",
        "ok": "3397",
        "ko": "7147"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 28793,
        "percentage": 3
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 704048,
        "percentage": 69
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 123465,
        "percentage": 12
    },
    "group4": {
        "name": "failed",
        "count": 156894,
        "percentage": 15
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "544.642",
        "ok": "460.304",
        "ko": "84.338"
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
        "total": "1013200",
        "ok": "856306",
        "ko": "156894"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "49",
        "ko": "9"
    },
    "maxResponseTime": {
        "total": "60059",
        "ok": "32001",
        "ko": "60059"
    },
    "meanResponseTime": {
        "total": "533",
        "ok": "499",
        "ko": "715"
    },
    "standardDeviation": {
        "total": "1288",
        "ok": "1022",
        "ko": "2230"
    },
    "percentiles1": {
        "total": "258",
        "ok": "249",
        "ko": "324"
    },
    "percentiles2": {
        "total": "316",
        "ok": "289",
        "ko": "370"
    },
    "percentiles3": {
        "total": "1361",
        "ok": "1316",
        "ko": "1546"
    },
    "percentiles4": {
        "total": "3437",
        "ok": "3397",
        "ko": "7147"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 28793,
        "percentage": 3
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 704048,
        "percentage": 69
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 123465,
        "percentage": 12
    },
    "group4": {
        "name": "failed",
        "count": 156894,
        "percentage": 15
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "544.642",
        "ok": "460.304",
        "ko": "84.338"
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
