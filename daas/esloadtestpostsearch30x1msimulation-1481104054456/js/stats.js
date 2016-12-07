var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "300",
        "ok": "0",
        "ko": "300"
    },
    "minResponseTime": {
        "total": "5089",
        "ok": "-",
        "ko": "5089"
    },
    "maxResponseTime": {
        "total": "8512",
        "ok": "-",
        "ko": "8512"
    },
    "meanResponseTime": {
        "total": "6407",
        "ok": "-",
        "ko": "6407"
    },
    "standardDeviation": {
        "total": "1244",
        "ok": "-",
        "ko": "1244"
    },
    "percentiles1": {
        "total": "5707",
        "ok": "-",
        "ko": "5706"
    },
    "percentiles2": {
        "total": "8376",
        "ok": "-",
        "ko": "8376"
    },
    "percentiles3": {
        "total": "8425",
        "ok": "-",
        "ko": "8425"
    },
    "percentiles4": {
        "total": "8483",
        "ok": "-",
        "ko": "8483"
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
        "count": 300,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "4.272",
        "ok": "-",
        "ko": "4.272"
    }
},
contents: {
"req_elasticsearch---a71e1": {
        type: "REQUEST",
        name: "Elasticsearch - Load Test - Post Search - ",
path: "Elasticsearch - Load Test - Post Search - ",
pathFormatted: "req_elasticsearch---a71e1",
stats: {
    "name": "Elasticsearch - Load Test - Post Search - ",
    "numberOfRequests": {
        "total": "300",
        "ok": "0",
        "ko": "300"
    },
    "minResponseTime": {
        "total": "5089",
        "ok": "-",
        "ko": "5089"
    },
    "maxResponseTime": {
        "total": "8512",
        "ok": "-",
        "ko": "8512"
    },
    "meanResponseTime": {
        "total": "6407",
        "ok": "-",
        "ko": "6407"
    },
    "standardDeviation": {
        "total": "1244",
        "ok": "-",
        "ko": "1244"
    },
    "percentiles1": {
        "total": "5706",
        "ok": "-",
        "ko": "5706"
    },
    "percentiles2": {
        "total": "8376",
        "ok": "-",
        "ko": "8376"
    },
    "percentiles3": {
        "total": "8425",
        "ok": "-",
        "ko": "8425"
    },
    "percentiles4": {
        "total": "8483",
        "ok": "-",
        "ko": "8483"
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
        "count": 300,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "4.272",
        "ok": "-",
        "ko": "4.272"
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
