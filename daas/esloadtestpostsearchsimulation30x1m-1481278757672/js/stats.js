var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "29861",
        "ok": "17490",
        "ko": "12371"
    },
    "minResponseTime": {
        "total": "39",
        "ok": "47",
        "ko": "39"
    },
    "maxResponseTime": {
        "total": "321",
        "ok": "315",
        "ko": "321"
    },
    "meanResponseTime": {
        "total": "60",
        "ok": "66",
        "ko": "50"
    },
    "standardDeviation": {
        "total": "16",
        "ok": "17",
        "ko": "9"
    },
    "percentiles1": {
        "total": "57",
        "ok": "62",
        "ko": "50"
    },
    "percentiles2": {
        "total": "63",
        "ok": "68",
        "ko": "52"
    },
    "percentiles3": {
        "total": "90",
        "ok": "107",
        "ko": "59"
    },
    "percentiles4": {
        "total": "132",
        "ok": "141",
        "ko": "87"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 17490,
        "percentage": 59
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
        "count": 12371,
        "percentage": 41
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "474.346",
        "ok": "277.831",
        "ko": "196.515"
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
        "total": "29861",
        "ok": "17490",
        "ko": "12371"
    },
    "minResponseTime": {
        "total": "39",
        "ok": "47",
        "ko": "39"
    },
    "maxResponseTime": {
        "total": "321",
        "ok": "315",
        "ko": "321"
    },
    "meanResponseTime": {
        "total": "60",
        "ok": "66",
        "ko": "50"
    },
    "standardDeviation": {
        "total": "16",
        "ok": "17",
        "ko": "9"
    },
    "percentiles1": {
        "total": "57",
        "ok": "62",
        "ko": "50"
    },
    "percentiles2": {
        "total": "63",
        "ok": "68",
        "ko": "52"
    },
    "percentiles3": {
        "total": "90",
        "ok": "107",
        "ko": "59"
    },
    "percentiles4": {
        "total": "132",
        "ok": "141",
        "ko": "86"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 17490,
        "percentage": 59
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
        "count": 12371,
        "percentage": 41
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "474.346",
        "ok": "277.831",
        "ko": "196.515"
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