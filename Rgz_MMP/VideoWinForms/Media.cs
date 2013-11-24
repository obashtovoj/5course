using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Diagnostics;
using System.Windows.Forms;
using System.Runtime.InteropServices;
using System.Text.RegularExpressions;

namespace VideoWinForms
{
    static class Media
    {
        internal static string Trim(string inputPath, string outputPath, TimeSpan timeStart, TimeSpan timeEnd, string brightness)
        {
            var args = String.Format(@"-i {0} -ss {2} -to {3} -vf lutyuv=y=val*{4} -c:v libx264 -c:a copy -y {1}", inputPath, outputPath, timeStart.ToString(), timeEnd.ToString(), brightness); //msmpeg4
            return RunFFMPEG("ffmpeg.exe",args);
        }

        internal static string GetInfo(string path)
        {
            var args = String.Format("-i {0}", path);
            return RunFFMPEG("ffmpeg.exe",args);
        }

        internal static string GetStreamInfo(string path)
        {
            var args = String.Format("-show_streams -i {0}", path);
            return RunFFMPEG("ffprobe.exe", args);
        }

        private static string RunFFMPEG(string fileName, string arguments)
        {
            ProcessStartInfo startInfo = new ProcessStartInfo();
            startInfo.FileName = fileName;
            startInfo.Arguments = arguments;
            startInfo.RedirectStandardOutput = true;
            startInfo.RedirectStandardError = true;
            startInfo.UseShellExecute = false;
            startInfo.CreateNoWindow = true;

            Process processTemp = new Process();
            processTemp.StartInfo = startInfo;
            processTemp.EnableRaisingEvents = true;
            try
            {
                processTemp.Start();
                var log = processTemp.StandardError.ReadToEnd();
                return log;
            }
            catch (Exception e)
            {
                throw;
            }
        }

        internal static string DurationInfo(string info)
        {
            Regex re = new Regex("[D|d]uration:.((\\d|:|\\.)*)", RegexOptions.Compiled);
            Match m = re.Match(info);
            return m.Groups[1].Value;
        }

        internal static string BitrateInfo(string info)
        {
            Regex re = new Regex("[B|b]itrate:.((\\d|:)*)", RegexOptions.Compiled);
            Match m = re.Match(info);
            return m.Groups[1].Value;
        }

        internal static string AudioInfo(string info)
        {
            Regex re = new Regex("[A|a]udio:.*", RegexOptions.Compiled);
            Match m = re.Match(info);
            return m.Value.Replace("Audio: ", "");
        }

        internal static string VideoInfo(string info)
        {
            Regex re = new Regex("[V|v]ideo:.*", RegexOptions.Compiled);
            Match m = re.Match(info);
            return m.Value.Replace("Video: ", "");
        }

    }
}
