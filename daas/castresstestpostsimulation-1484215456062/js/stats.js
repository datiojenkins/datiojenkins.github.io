var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "314484",
        "ok": "280694",
        "ko": "33790"
    },
    "minResponseTime": {
        "total": "53",
        "ok": "53",
        "ko": "682"
    },
    "maxResponseTime": {
        "total": "96000",
        "ok": "91820",
        "ko": "96000"
    },
    "meanResponseTime": {
        "total": "11265",
        "ok": "5913",
        "ko": "55723"
    },
    "standardDeviation": {
        "total": "23269",
        "ok": "10657",
        "ko": "12065"
    },
    "percentiles1": {
        "total": "2099",
        "ok": "1848",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "3911",
        "ok": "2691",
        "ko": "60008"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "32932",
        "ko": "60010"
    },
    "percentiles4": {
        "total": "60010",
        "ok": "34855",
        "ko": "60012"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 1591,
        "percentage": 1
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 37921,
        "percentage": 12
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 241182,
        "percentage": 77
    },
    "group4": {
        "name": "failed",
        "count": 33790,
        "percentage": 11
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "261.689",
        "ok": "233.572",
        "ko": "28.117"
    }
},
contents: {
"req_castresstestpos-57704": {
        type: "REQUEST",
        name: "CaStressTestPostSimulation",
path: "CaStressTestPostSimulation",
pathFormatted: "req_castresstestpos-57704",
stats: {
    "name": "CaStressTestPostSimulation",
    "numberOfRequests": {
        "total": "314484",
        "ok": "280694",
        "ko": "33790"
    },
    "minResponseTime": {
        "total": "53",
        "ok": "53",
        "ko": "682"
    },
    "maxResponseTime": {
        "total": "96000",
        "ok": "91820",
        "ko": "96000"
    },
    "meanResponseTime": {
        "total": "11265",
        "ok": "5913",
        "ko": "55723"
    },
    "standardDeviation": {
        "total": "23269",
        "ok": "10657",
        "ko": "12065"
    },
    "percentiles1": {
        "total": "2099",
        "ok": "1841",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "3913",
        "ok": "2691",
        "ko": "60008"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "32930",
        "ko": "60010"
    },
    "percentiles4": {
        "total": "60010",
        "ok": "34854",
        "ko": "60012"
    },
    "group1": {
        "name": "t < 200 ms",
        "count": 1591,
        "percentage": 1
    },
    "group2": {
        "name": "200 ms < t < 800 ms",
        "count": 37921,
        "percentage": 12
    },
    "group3": {
        "name": "t > 800 ms",
        "count": 241182,
        "percentage": 77
    },
    "group4": {
        "name": "failed",
        "count": 33790,
        "percentage": 11
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "261.689",
        "ok": "233.572",
        "ko": "28.117"
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
