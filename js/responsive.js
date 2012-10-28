(function ()
{
        var collection = ['div','span','p','td','li','pre'];
        var posToGridMap = {
                                '42':'span1',
                                '104': 'span2',
                                '166': 'span3',
                                '228' : 'span4',
                                '290' : 'span5',
                                '352' : 'span6',
                                '414' : 'span7',
                                '476' : 'span8',
                                '538' : 'span9',
                                '600' : 'span10',
                                '662' : 'span11',
                                '724' : 'span12',
                                'fullWidth': 'fullWidth'
                };
        jQuery.each(collection, function(i)
                    {
                        var item = collection[i];
                        var ele = jQuery(item);
                        ele.each(function(){
                                computeAndAssignClass(jQuery(this));
                        });
                });
        
        function computeAndAssignClass(ele)
        {
                var width = ele.width();
                var position = ele.position();
                var normalizedWidth = normalizeWidth(width);
                // if(position.top < 120)
                // {
                //     console.log(position.top + ' ' + position.left + '' + ele.attr('class'));
                //     ele.addClass(posToGridMap['fullWidth']);
                // }
                // else 
                if(position.top > 120 && position.left > 50)
                {
                        ele.addClass(posToGridMap[normalizedWidth]);
                }
        }
        
        function normalizeWidth(width)
        {
                if(width <= 42)
                        return '42';
                else if(width <= 104 && width > 42)
                        return '104';
                else if(width <= 166 && width > 104)
                        return '166';
                else if(width <= 228 && width > 166)
                        return '228';
                else if(width <= 290 && width > 228)
                        return '290';
                else if(width <= 352 && width > 290)
                        return '352';
                else if(width <= 414 && width > 352)
                        return '414';
                else if(width <= 476 && width > 414)
                        return '476';
                else if(width <= 538 && width >476)
                        return '538';
                else if(width <= 600 && width > 538)
                        return '600';
                else if(width <= 662 && width > 600)
                        return '662';
                else if(width <= 724 && width > 662)
                        return '724';
        }
})();