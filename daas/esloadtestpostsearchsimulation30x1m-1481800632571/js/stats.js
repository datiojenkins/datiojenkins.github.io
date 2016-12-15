var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "19179",
        "ok": "18796",
        "ko": "383"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "53",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "1185",
        "ok": "1185",
        "ko": "102"
    },
    "meanResponseTime": {
        "total": "93",
        "ok": "94",
        "ko": "55"
    },
    "standardDeviation": {
        "total": "58",
        "ok": "58",
        "ko": "8"
    },
    "percentiles1": {
        "total": "85",
        "ok": "85",
        "ko": "53"
    },
    "percentiles2": {
        "total": "95",
        "ok": "96",
        "ko": "59"
    },
    "percentiles3": {
        "total": "135",
        "ok": "135",
        "ko": "72"
    },
    "percentiles4": {
        "total": "186",
        "ok": "187",
        "ko": "83"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 18746,
        "percentage": 98
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 50,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 383,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "304.559",
        "ok": "298.477",
        "ko": "6.082"
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
        "total": "19179",
        "ok": "18796",
        "ko": "383"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "53",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "1185",
        "ok": "1185",
        "ko": "102"
    },
    "meanResponseTime": {
        "total": "93",
        "ok": "94",
        "ko": "55"
    },
    "standardDeviation": {
        "total": "58",
        "ok": "58",
        "ko": "8"
    },
    "percentiles1": {
        "total": "85",
        "ok": "85",
        "ko": "53"
    },
    "percentiles2": {
        "total": "95",
        "ok": "96",
        "ko": "59"
    },
    "percentiles3": {
        "total": "135",
        "ok": "135",
        "ko": "72"
    },
    "percentiles4": {
        "total": "186",
        "ok": "187",
        "ko": "83"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 18746,
        "percentage": 98
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 50,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 383,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "304.559",
        "ok": "298.477",
        "ko": "6.082"
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
