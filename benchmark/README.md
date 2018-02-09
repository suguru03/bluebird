**2018-07-16** Latest results, using latest versions of modules:

    ├── async@2.6.1
    ├── davy@1.3.0
    ├── deferred@0.7.9
    ├── kew@0.7.0
    ├── lie@3.3.0
    ├── optimist@0.6.1
    ├── promise@8.0.1
    ├── q@1.5.1
    ├── rsvp@4.8.3
    ├── vow@0.4.17
    ├── when@3.7.8

bench doxbee-sequential `ls ./doxbee-sequential/*.js | sed -e 's|\.js||' | xargs node ./performance.js --p 1 --t 1 --n 10000`

results for 10000 parallel executions, 1 ms per I/O op

    file                                       time(ms)  memory(MB)
    callbacks-baseline.js                           157       26.41
    callbacks-suguru03-neo-async-waterfall.js       208       41.10
    promises-suguru03-aigle.js                      213       49.21
    callbacks-caolan-async-waterfall.js             228       45.66
    promises-native-async-await.js                  236       67.71
    promises-bluebird.js                            245       47.39
    promises-bluebird-generator.js                  255       38.70
    promises-cujojs-when.js                         263       64.75
    promises-then-promise.js                        279       65.18
    promises-lvivski-davy.js                        285       88.75
    promises-ecmascript6-native.js                  299       75.65
    promises-tildeio-rsvp.js                        319       81.97
    generators-tj-co.js                             358       67.28
    promises-dfilatov-vow.js                        494      133.27
    promises-calvinmetcalf-lie.js                   500      124.75
    promises-obvious-kew.js                         630      192.89
    streamline-generators.js                        659       91.84
    promises-medikoo-deferred.js                    702      128.45
    observables-pozadi-kefir.js                     738      154.88
    streamline-callbacks.js                         898      110.79
    observables-Reactive-Extensions-RxJS.js        1001      237.51
    observables-caolan-highland.js                 2801      442.15
    promises-kriskowal-q.js                        2886      302.75
    observables-baconjs-bacon.js.js                4017      648.27

    Platform info:
    Darwin 17.7.0 x64
    Node.JS 10.10.0
    V8 6.8.275.30-node.24
    Intel(R) Core(TM) i7-8559U CPU @ 2.70GHz × 8

bench parallel (`--p 25`)

results for 10000 parallel executions, 1 ms per I/O op `ls ./madeup-parallel/*.js | sed -e 's|\.js||' | xargs node ./performance.js --p 25 --t 1 --n 10000`

results for 10000 parallel executions, 1 ms per I/O op

    file                                      time(ms)  memory(MB)
    callbacks-baseline.js                          287       74.29
    callbacks-suguru03-neo-async-parallel.js       293       82.32
    promises-suguru03-aigle.js                     365      106.20
    promises-bluebird.js                           384      106.39
    callbacks-caolan-async-parallel.js             405      113.41
    promises-bluebird-generator.js                 416      106.05
    promises-lvivski-davy.js                       416      161.68
    promises-cujojs-when.js                        529      169.47
    promises-ecmascript6-native.js                 918      228.77
    promises-native-async-await.js                 931      232.62
    promises-tildeio-rsvp.js                       948      333.57
    promises-calvinmetcalf-lie.js                  979      370.69
    promises-then-promise.js                      1221      290.09
    promises-medikoo-deferred.js                  1377      288.71
    promises-dfilatov-vow.js                      2073      534.91
    promises-obvious-kew.js                       2081      609.77
    streamline-generators.js                      5112      981.55
    streamline-callbacks.js                       7085     1140.18
