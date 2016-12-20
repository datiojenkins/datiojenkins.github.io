var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1062640",
        "ok": "860544",
        "ko": "202096"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "45",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "60048",
        "ok": "50670",
        "ko": "60048"
    },
    "meanResponseTime": {
        "total": "508",
        "ok": "477",
        "ko": "640"
    },
    "standardDeviation": {
        "total": "1228",
        "ok": "965",
        "ko": "1986"
    },
    "percentiles1": {
        "total": "246",
        "ok": "233",
        "ko": "296"
    },
    "percentiles2": {
        "total": "298",
        "ok": "278",
        "ko": "348"
    },
    "percentiles3": {
        "total": "1338",
        "ok": "1298",
        "ko": "1498"
    },
    "percentiles4": {
        "total": "3414",
        "ok": "3361",
        "ko": "3665"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 98390,
        "percentage": 9
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 640561,
        "percentage": 60
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 121593,
        "percentage": 11
    },
    "group4": {
        "name": "failed",
        "count": 202096,
        "percentage": 19
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "569.028",
        "ok": "460.809",
        "ko": "108.219"
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
        "total": "1062640",
        "ok": "860544",
        "ko": "202096"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "45",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "60048",
        "ok": "50670",
        "ko": "60048"
    },
    "meanResponseTime": {
        "total": "508",
        "ok": "477",
        "ko": "640"
    },
    "standardDeviation": {
        "total": "1228",
        "ok": "965",
        "ko": "1986"
    },
    "percentiles1": {
        "total": "246",
        "ok": "234",
        "ko": "296"
    },
    "percentiles2": {
        "total": "298",
        "ok": "278",
        "ko": "348"
    },
    "percentiles3": {
        "total": "1338",
        "ok": "1298",
        "ko": "1498"
    },
    "percentiles4": {
        "total": "3414",
        "ok": "3361",
        "ko": "3665"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 98390,
        "percentage": 9
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 640561,
        "percentage": 60
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 121593,
        "percentage": 11
    },
    "group4": {
        "name": "failed",
        "count": 202096,
        "percentage": 19
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "569.028",
        "ok": "460.809",
        "ko": "108.219"
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
