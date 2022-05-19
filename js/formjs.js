$(document).ready(function(){
	$('input:radio[name="yes-no-binding"]').change(function(){

        if ($(this).val() == 'yes') {
            //true
            $('#binding-thickness-p').removeAttr('hidden')
        }
        else {
            //false
            $('#binding-thickness-p').attr('hidden', '')
        }
    });

	$('input:radio[name="yes-no-overhang"]').change(function(){

        if ($(this).val() == 'yes') {
            //true
            $('#fretboard-overhang-p').removeAttr('hidden')
        }
        else {
            //false
            $('#fretboard-overhang-p').attr('hidden', '')
        }
    });

    $('#units').change(function() {
    	var nutwidthmm = 44.5
    	var nutstringspreadmm = 35.56
    	var nutthicknessmm = 4.8
    	var bridgestringspreadmm = 52.0
    	var scalelengthmm = 623.9
    	var bindingthicknessmm = 1.52
    	var fretboardoverhangmm = 8
    	if ($(this).val() == 'mm') {
    		$('#nut-width').attr('placeholder', nutwidthmm)
    		$('#nut-string-spread').attr('placeholder', nutstringspreadmm)
    		$('#nut-thickness').attr('placeholder', nutthicknessmm)
    		$('#bridge-string-spread').attr('placeholder', bridgestringspreadmm)
    		$('#scale-length').attr('placeholder', scalelengthmm)
    		$('#binding-thickness').attr('placeholder', bindingthicknessmm)
    		$('#fretboard-overhang').attr('placeholder', fretboardoverhangmm)
    	} else {
    		$('#nut-width').attr('placeholder', Math.round(1000*nutwidthmm/25.4)/1000)
    		$('#nut-string-spread').attr('placeholder', Math.round(1000*nutstringspreadmm/25.4)/1000)
    		$('#nut-thickness').attr('placeholder', Math.round(1000*nutthicknessmm/25.4)/1000)
    		$('#bridge-string-spread').attr('placeholder', Math.round(1000*bridgestringspreadmm/25.4)/1000)
    		$('#scale-length').attr('placeholder', Math.round(1000*scalelengthmm/25.4)/1000)
    		$('#binding-thickness').attr('placeholder', Math.round(1000*bindingthicknessmm/25.4)/1000)
    		$('#fretboard-overhang').attr('placeholder', Math.round(1000*fretboardoverhangmm/25.4)/1000)
    	}
    });

    $('.my-form').on('submit', function () {
    alert('Form submitted!');
    return false;
});
});